import React, {useContext} from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { colors } from "../UI/StyleVariables";
import CartContext from "../../store/cart-context";

const CartButtonContainer = styled(Button)`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  gap: 0.5rem;
  align-items: center;
  background-color: ${colors.primary};
  color: ${colors.textOnColor};
  margin-right: 2.5rem;
  padding: 1.2rem 2rem;

  &:hover,
  &:active {
    background-color: ${colors.primaryHover};
  }
`;

const Counter = styled.span`
  display: block;
  border-radius: 50%;
  width: 1.1rem;
  height: 1.1rem;
  background: ${colors.secondary};
  padding: 0.2rem;
`;

const CartButton = (props) => {

  const cartCtx = useContext(CartContext);

  //to just count the meal items uniquely and not the total amount per item use reduce()
  const numCartItems = cartCtx.items.reduce((curNumber, item)=> {
    return curNumber + item.amount;
  }, 0);

  return (
    <CartButtonContainer onClick={props.onClick}>
      <span><i className="fa fa-shopping-cart"></i></span>
      <span>Your Cart</span>
      <Counter>{numCartItems}</Counter>
    </CartButtonContainer>
  );
};

export default CartButton;
