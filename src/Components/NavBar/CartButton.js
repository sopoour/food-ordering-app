import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { colors } from "../UI/StyleVariables";

const CartButton = () => {
  const CartButtonContainer = styled(Button)`
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${colors.primary};
    color: ${colors.textOnColor};

    &:hover,
    &:active {
      background-color: ${colors.primaryHover};
    }
  `;

  const Counter = styled.p`
    display: block;
    border-radius: 50%;
    width: 1.1rem;
    height: 1.1rem;
    background: ${colors.secondary};
    padding: 0.2rem;
    margin-left: 1rem;
  `;

  return (
    <CartButtonContainer>
      <p>Your Cart</p>
      <Counter>2</Counter>
    </CartButtonContainer>
  );
};

export default CartButton;
