import React from "react";
import Button from "../UI/Button";
import styled from "styled-components";
import { colors } from "../UI/StyleVariables";

const CartItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #8a2b06;
  padding: 1rem 0;
  margin: 1rem 0;

  & div.actions {
    display: flex;
    flex-direction: column;
    
  }
`;

const CartSummary = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span.price {
    font-weight: bold;
    color: ${colors.secondary};
  }

  & span.amount {
    font-weight: bold;
    border: 1px solid #ccc;
    padding: 0.25rem 0.75rem;
    border-radius: 6px;
    color: ${colors.secondary};
  }
`;

const AmountButtons = styled(Button)`
  border: 1px solid ${colors.secondary};
  font: inherit;
  font-weight: bold;
  font-size: 1.25rem;
  color: ${colors.secondary};
  width: 3rem;
  text-align: center;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  margin-left: 1rem;
  margin: 0.25rem;
  padding: 0.7rem;

  &:hover,
  &:active {
      background-color: ${colors.secondaryHover};
      color: white;
  }
`;

const CartItem = (props) => {
  return (
    <CartItemWrapper>
      <div>
        <h2>{props.name}</h2>
        <CartSummary>
          <span className={"price"}>${props.price.toFixed(2)}</span>
          <span className={"amount"}>x {props.amount}</span>
        </CartSummary>
      </div>
      <div className={"actions"}>
        <AmountButtons onClick={props.onRemove}>-</AmountButtons>
        <AmountButtons onClick={props.onAdd}>+</AmountButtons>
      </div>
    </CartItemWrapper>
  );
};

export default CartItem;
