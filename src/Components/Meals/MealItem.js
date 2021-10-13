import React, { useContext } from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";
import Card from "../UI/Card";
import { colors } from "../UI/StyleVariables";
import CartContext from "../../store/cart-context";

const MealItemCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.primary};
  padding: 1rem 2rem 1rem 2rem;
  margin: 1rem;
  &li {
    align-self: left;
  }
`;

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  //update the array of items within context with the added item
  //the updated amount we get by passing this handler to the MealItemForm
  const handleAddToCart = (amount) => {
    cartCtx.onAdd({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <MealItemCard>
      <li>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>${props.price.toFixed(2)}</p>
      </li>
      <MealItemForm onAddToCart={handleAddToCart} id={props.id} />
    </MealItemCard>
  );
};

export default MealItem;
