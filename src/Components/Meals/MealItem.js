import React from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";
import Card from "../UI/Card";
import { colors } from "../UI/StyleVariables";

const MealItem = (props) => {
  const MealItemCard = styled(Card)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colors.primary};
    padding: 1rem 2rem 1rem 2rem;
    margin: 1rem;
  `;

  return (
    <MealItemCard>
      <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p>$ {props.price}</p>
      </div>
      <MealItemForm name={props.name} price={props.price} />
    </MealItemCard>
  );
};

export default MealItem;
