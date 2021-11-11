import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import styled from "styled-components";
import useInput from "../../hooks/use-input";
import { colors } from "../UI/StyleVariables";

//TODO: Try out to use Refs instead of useState for the values since it doesn't make any sense to use useState for that

const CheckoutForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  gap: 0.5rem;
  margin-top: 2rem;

  & div.confirm-actions {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1.5rem;

    & button.confirm-btn {
      background-color: ${colors.primary};
      color: ${colors.textOnColor};

      &:disabled,
      button:disabled:hover,
      button:disabled:active {
        background-color: ${colors.secondary};
        color: ${colors.textOnColor};
      }
    }
  }
`;

//Some helper functions for form validation
const isNotEmpty = (value) => {
  return value.trim() !== "";
};
const isFiveChars = (value) => {
  return value.trim().length === 5;
};

const Checkout = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    handleValueChange: handleNameChange,
    handleInputBlur: handleNameBlur,
  } = useInput(isNotEmpty);

  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    hasError: streetHasError,
    handleValueChange: handleStreetChange,
    handleInputBlur: handleStreetBlur,
  } = useInput(isNotEmpty);

  const {
    value: enteredPostalCode,
    isValid: enteredPostalCodeIsValid,
    hasError: postalCodeasError,
    handleValueChange: handlePostalCodeChange,
    handleInputBlur: handlePostalCodeBlur,
  } = useInput(isFiveChars);

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityHasError,
    handleValueChange: handleCityChange,
    handleInputBlur: handleCityBlur,
  } = useInput(isNotEmpty);

  const inputFields = [
    {
      id: "name",
      name: "Name",
      value: enteredName,
      isError: nameHasError,
      errorText: "name!",
      onChange: handleNameChange,
      onBlur: handleNameBlur,
      classes: !nameHasError ? "order-input" : "order-input invalid",
      type: "text",
    },
    {
      id: "street",
      name: "Street",
      value: enteredStreet,
      isError: streetHasError,
      errorText: "street!",
      onChange: handleStreetChange,
      onBlur: handleStreetBlur,
      classes: !streetHasError ? "order-input" : "order-input invalid",
      type: "text",
    },
    {
      id: "postal",
      name: "Postal Code",
      value: enteredPostalCode,
      isError: postalCodeasError,
      errorText: "postal code (5 characters long)!",
      onChange: handlePostalCodeChange,
      onBlur: handlePostalCodeBlur,
      classes: !postalCodeasError ? "order-input" : "order-input invalid",
      type: "number",
    },
    {
      id: "city",
      name: "City",
      value: enteredCity,
      isError: cityHasError,
      errorText: "city!",
      onBlur: handleCityBlur,
      onChange: handleCityChange,
      classes: !cityHasError ? "order-input" : "order-input invalid",
      type: "text",
    },
  ];

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredStreetIsValid &&
    enteredPostalCodeIsValid &&
    enteredCityIsValid
  ) {
    formIsValid = true;
  }

  const handleConfirm = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };

  return (
    <CheckoutForm onSubmit={handleConfirm}>
      {inputFields.map((item) => (
        <Input
          labelName={item.name}
          isError={item.isError}
          errorName={item.errorText}
          classes={item.classes}
          input={{
            id: item.id,
            type: item.type,
            value: item.value,
            onBlur: item.onBlur,
            onChange: item.onChange,
          }}
        ></Input>
      ))}
      <div className={"confirm-actions"}>
        <Button
          type="button"
          onClick={props.onCancel}
          style={{
            backgroundColor: colors.secondayBright,
            color: colors.textOnColor,
          }}
        >
          Cancel
        </Button>
        <Button
          disabled={!formIsValid}
          onClick={props.onOrder}
          className={"confirm-btn"}
        >
          Confirm
        </Button>
      </div>
    </CheckoutForm>
  );
};

export default Checkout;
