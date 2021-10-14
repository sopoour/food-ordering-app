import React, { useContext, useState, useEffect } from "react";
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
  padding: 1.2rem 2rem;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

  &:hover,
  &:active {
    background-color: ${colors.primaryHover};
  }

  //bump animation when items are added
  &.bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
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

const NavBarCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  //to just count the meal items uniquely and not the total amount per item use reduce()
  const numCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  //if the state is true insert the className "bump" to the button
  const btnClasses = btnIsHighlighted ? "bump" : "";

  useEffect(() => {
    //if the cart is empty don't do anything
    if (cartCtx.items.length === 0) {
      return;
    }
    //otherwise change state to true and add "bump" as className to trigger animation
    setBtnIsHighlighted(true);

    //after 300ms stop animation
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };

  }, [cartCtx.items]);

  return (
    <CartButtonContainer onClick={props.onClick} className={btnClasses}>
      <span>
        <i className="fa fa-shopping-cart"></i>
      </span>
      <span>Your Cart</span>
      <Counter>{numCartItems}</Counter>
    </CartButtonContainer>
  );
};

export default NavBarCartButton;
