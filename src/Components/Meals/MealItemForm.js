import React, { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { colors, device } from "../UI/StyleVariables";

const ItemFormContainer = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  border-top: 2px solid ${colors.secondayBright};
  width: 100%;

  @media ${device.tablet} {
    width: auto;
    border-top: none;
    align-items: flex-end;
  }
`;

const AddButton = styled(Button)`
  background-color: ${colors.secondary};
  color: ${colors.textOnColor};
  margin-top: 1rem;

  &:hover {
    background-color: ${colors.secondaryHover};
  }
`;

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  //since it's a simple input number change and only read (not write), it's recommended to use ref
  const amountInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    //get currently entered value from input, add a + in front of it so it's a number and not a string
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    //the cart item that is gonna be added needs more data than just the amount, but in this form we only have the amount
    //so we need to handle the actual adding of the entire meal item within MealItem
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    /* We are handling the entire submission via the form so it applies to changes of both the add btn and input */
    <ItemFormContainer onSubmit={handleSubmit}>
      <Input
        ref={amountInputRef}
        labelName={"Amount: "}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <AddButton>+ Add</AddButton>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </ItemFormContainer>
  );
};

export default MealItemForm;
