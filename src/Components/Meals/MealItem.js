import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";
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

  const AmountWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: flex-end;
  `;

  const AddButton = styled(Button)`
    background-color: ${colors.secondary};
    color: ${colors.textOnColor};
    margin-top: 1rem;

    &:hover {
      background-color: ${colors.secondaryHover};
    }
  `;

  const [mealAmount, setMealAmount] = useState(0);

  /**
   * 
   * TODO: add a handleInput method that is inserted in <Input onChange={}>
   * TODO: figure out how to do a counter of the amount of MealItem (--> in handleAdd)
   */

  const handleAdd = (e) => {
    console.log("This will count the total amount of added item bundling userInput as well as Add button")
  };

  return (
    <MealItemCard>
      <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p>$ {props.price}</p>
      </div>
      <AmountWrapper>
        <Input inputValue={mealAmount} labelName={"Amount: "}></Input>
        <AddButton onClick={handleAdd}>+ Add</AddButton>
      </AmountWrapper>
    </MealItemCard>
  );
};

export default MealItem;
