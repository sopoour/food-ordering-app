import React from "react";
import Button from "../UI/Button";
import styled from "styled-components";
import { colors, device } from "../UI/StyleVariables";

const CartItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid ${colors.primary};
  padding: 1rem 0;
  font-size: 14px;

  & div.actions {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    text-align: center;
  }

  @media ${device.tablet} {
    font-size: auto;
  }
`;

const CartSummary = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media ${device.tablet} {
    gap: 2rem;
  }

  & span.price {
    font-weight: bold;
    color: ${colors.secondary};
  }

  & span.amount {
    font-weight: bold;
    border: 1px solid ${colors.secondaryHover};
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
  width: 5rem;
  color: ${colors.secondary};
  text-align: center;
  background-color: transparent;
  cursor: pointer;
  margin: 0.25rem;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

  &:hover,
  &:active {
    background-color: ${colors.secondaryHover};
    color: white;
  }
`;

const CartItem = (props) => {
  return (
    <CartItemWrapper>
      <div className={"content"}>
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
