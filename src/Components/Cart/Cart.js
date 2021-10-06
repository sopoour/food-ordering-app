import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Input from "../UI/Input";

import { colors } from "../UI/StyleVariables";

const Cart = (props) => {
  const CartCard = styled(Card)`
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;
    background: white;

    & header {
      padding: 1rem;
      margin: 0;
    }

    & div {
      padding: 1rem;
    }

    & footer {
      padding: 1rem;
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }
  `;
  return (
    <CartCard>
      <header>
        <h1>Your Cart</h1>
      </header>
      <div>
        <h3>{props.name}</h3>
        <div>
          <p>{props.price}</p>
          <Input inputValue={props.inputAmount}></Input>
        </div>

        <div>
          <h2>Total Amount</h2>
          <h2>${props.handleTotalAmount}</h2>
        </div>
      </div>
      <footer>
        <Button
          style={{
            backgroundColor: "white",
            color: `${colors.secondary}`,
            border: "solid",
            borderColor: `${colors.secondary}`,
          }}
          onClick={props.onClose}
        >
          Close
        </Button>
        <Button
          style={{ backgroundColor: `${colors.secondary}`, color: "white" }}
          onClick={props.onOrder}
        >
          Order
        </Button>
      </footer>
    </CartCard>
  );
};

export default Cart;
