import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import styled from "styled-components";

const CheckoutForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  margin-top: 2rem;

  & div.confirm-actions {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

const CheckoutInput = styled(Input)`
  
  display: flex;
  flex-flow: column wrap;
  align-content: stretch;
  border: 1px solid #ccc;

  & label {
    display: block;
  }
`;

//Some helper functions for form validation
const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const handleConfirm = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredCityIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }
  };

  return (
    <CheckoutForm onSubmit={handleConfirm}>
      <CheckoutInput
        labelName={"Name: "}
        ref={nameInputRef}
        validation={!formInputsValidity.name}
        validationName={"name!"}
        invalidClass={formInputsValidity.name ? "" : "invalid"}
        input={{
          id: "name",
          type: "text",
        }}
      ></CheckoutInput>
      <CheckoutInput
        labelName={"Street: "}
        ref={streetInputRef}
        validation={!formInputsValidity.street}
        validationName={"street!"}
        invalidClass={formInputsValidity.street ? "" : "invalid"}
        input={{
          id: "street",
          type: "text",
        }}
      ></CheckoutInput>
      <CheckoutInput
        labelName={"Postal Code: "}
        ref={postalInputRef}
        validation={!formInputsValidity.postalCode}
        validationName={"postal code (5 characters long)!"}
        invalidClass={formInputsValidity.postalCode ? "" : "invalid"}
        input={{
          id: "postal",
          type: "text",
        }}
      ></CheckoutInput>
      <CheckoutInput
        labelName={"City: "}
        ref={cityInputRef}
        validation={!formInputsValidity.city}
        validationName={"city!"}
        invalidClass={formInputsValidity.city ? "" : "invalid"}
        input={{
          id: "city",
          type: "text",
        }}
      ></CheckoutInput>
      <div className={"confirm-actions"}>
        <Button type="button" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button onClick={props.onOrder}>Confirm</Button>
      </div>
    </CheckoutForm>
  );
};

export default Checkout;
