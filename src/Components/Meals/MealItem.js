import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";
import { colors } from "../UI/StyleVariables";

const MealItem = (props) => {
  const MealItemCard = styled(Card)`
    display: flex;
    justify-content: space-between;
    background: ${colors.primary};
    padding: 1rem;
    margin: 1rem;
  `;

  const AmountWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
  `;

  const AddButton = styled(Button)`
    background-color: ${colors.secondary};
    color: ${colors.textOnColor};
    margin-top: 1rem;
  `;

  return (
    <MealItemCard>
      <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p>$ {props.price}</p>
      </div>
      <AmountWrapper>
        <div styled={{ display: "flex", justifyContent: "flex-end" }}>
          <p>Amount</p>
          <Input></Input>
        </div>
        <AddButton>+ Add</AddButton>
      </AmountWrapper>
    </MealItemCard>
  );
};

export default MealItem;
