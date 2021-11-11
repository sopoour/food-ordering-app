import React, { useContext, useState } from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import Button from "../UI/Button";

import { colors, device } from "../UI/StyleVariables";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const CartCard = styled(Card)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  z-index: 100;
  overflow: hidden;
  background: white;
  padding: 1.25rem;

  @media ${device.tablet} {
    width: 50%;
  }

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 20rem;
    overflow: auto;
  }

  & div.total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 2rem 0;
  }

  & div.order-actions {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalPrice = `$${cartCtx.totalPrice.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const [isCheckout, setIsCheckout] = useState(false);
  const [submission, setSubmission] = useState({
    isHappening: false,
    isDone: false,
  });
  const [error, setError] = useState(null);

  /* const [orderComplete, setOrderComplete] = useState({
    name: "",
    address: "",
    paymentMethod: "",
    order: [],
  }); */

  const handleCartItemRemove = (id) => {
    cartCtx.onRemove(id);
  };

  const handleCartItemAdd = (item) => {
    //add item where I set the amount to 1
    cartCtx.onAdd({ ...item, amount: 1 });
  };

  const handleOrder = () => {
    setIsCheckout(true);
  };

  //the userData is inserted into this function via the Checkout component
  //the orderItems we can get from our context

  
  const handleOrderSubmission = async (userData) => {
    setSubmission({
      isHappening: true,
      isDone: false,
    });

    try {
      //after state changed, first await that the fetch has happened until you change the state again
      const response = await fetch(
        "https://react-project-exercise-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            orderTime: new Date(),
            user: userData,
            orderedItems: cartCtx.items,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong with sending your order, try again!");
      }
      const data = await response.json();
      console.log(data);
      setSubmission({
        isHappening: false,
        isDone: true,
      });
      cartCtx.clearCart();
    } catch (error) {
      setError(error.message)
      setSubmission({
        isHappening: false,
        isDone: false,
      });
    }
  };

  const orderActions = (
    <div className="order-actions">
      <Button
        style={{
          backgroundColor: colors.secondayBright,
          color: colors.textOnColor,
        }}
        onClick={props.onCloseCart}
      >
        Close
      </Button>
      {hasItems && (
        <Button
          style={{ backgroundColor: `${colors.primary}`, color: "white" }}
          onClick={handleOrder}
        >
          Order
        </Button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            amount={item.amount}
            name={item.name}
            price={item.price}
            /*
             * Use bind to pre-configure the function for future execution
             * pre-configure the argument that function will receieve when it executes
             *
             * */
            onRemove={handleCartItemRemove.bind(null, item.id)}
            onAdd={handleCartItemAdd.bind(null, item)}
          />
        ))}
      </ul>
      <div className="total">
        <span>Total Price</span>
        <span>{totalPrice}</span>
      </div>
      {!isCheckout && orderActions}
      {isCheckout && (
        <Checkout
          onCancel={props.onCloseCart}
          onConfirm={handleOrderSubmission}
        />
      )}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const submissionDoneContent = (
    <React.Fragment>
      <p>You have successfully sent your order!</p>
      <div className="order-actions">
        <Button
          style={{
            backgroundColor: colors.secondayBright,
            color: colors.textOnColor,
          }}
          onClick={props.onCloseCart}
        >
          Close
        </Button>
      </div>
    </React.Fragment>
  );

  return (
    <CartCard>
      {!submission.isHappening && !submission.isDone && !error && cartModalContent}
      {!submission.isHappening && error && <p>{error}</p> }
      {submission.isHappening && !error && isSubmittingModalContent}
      {submission.isDone && submissionDoneContent}
    </CartCard>
  );
};

export default Cart;
