import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import Button from "../UI/Button";

import { colors } from "../UI/StyleVariables";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const CartCard = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  background: white;
  max-height: 30rem;

  & div {
    padding: 1rem;
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
    margin: 1rem 0;
  }

  & div.actions {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const handleCartItemRemove = (id) => {};

  const hanldeCartItemAdd = (item) => {};

  return (
    <CartCard>
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
            onAdd={hanldeCartItemAdd.bind(null, item)}
          />
        ))}
      </ul>
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <Button
          style={{
            backgroundColor: "white",
            color: `${colors.secondary}`,
            border: "solid",
            borderColor: `${colors.secondary}`,
          }}
          onClick={props.onCloseCart}
        >
          Close
        </Button>
        {hasItems && (
          <Button
            style={{ backgroundColor: `${colors.secondary}`, color: "white" }}
            onClick={props.onOrder}
          >
            Order
          </Button>
        )}
      </div>
    </CartCard>
  );
};

export default Cart;
