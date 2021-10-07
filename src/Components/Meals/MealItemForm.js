import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { colors } from "../UI/StyleVariables";

const MealItemForm = (props) => {
  const ItemFormContainer = styled.form`
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

  const [amountInput, setAmountInput] = useState(0);

  const [cartItems, setCartItems] = useState([]);

  const handleAmountCounter = (e) => {
    let counter = 0;
    counter += +e.target.value;
    console.log(counter);
    setAmountInput(counter);
  };

  /**
   * TODO: Move all of the handlers and states to the cart-context and implement useContext here
   * ! Make sure that context is resolving the current problem that the array of cartItems is always one item behind!!
   */

  const handleAddItem = () => {
    setAmountInput((prevCount) => {
      return prevCount + 1;
    });

    const addedCartItem = {
      id: Math.random().toString(),
      name: props.name,
      price: props.price,
      amount: amountInput,
    };

    setCartItems((prevItems) => {
      return prevItems.concat(addedCartItem);
    });

    console.log(cartItems);
  };

  return (
    <ItemFormContainer>
      <Input
        inputValue={amountInput}
        labelName={"Amount: "}
        onChange={handleAmountCounter}
      ></Input>
      <AddButton onClick={handleAddItem}>+ Add</AddButton>
    </ItemFormContainer>
  );
};

export default MealItemForm;
