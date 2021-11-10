import styled from "styled-components";
import React from "react";
import { device } from "./StyleVariables";

const InputContainer = styled.div`
  font-size: 16px;
  margin-top: 1rem;

  & label {
    margin-right: 1rem;
    font-weight: bold;
  }

  &.invalid input {
    border: 1px solid #b40e0e;
    background-color: #fddddd;
  }

  &.order-input {
    display: flex;
    flex-flow: column wrap;

    & label {
      display: block;
    }
  }

  @media ${device.tablet} {
    margin-top: 0;
  }
`;

const InputField = styled.input`
  border-radius: 5px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  border: none;
  height: 1.5rem;
  margin-top: 0.5rem;

  &.amount-input {
    width: 2rem;
    height: 1rem;
    text-align: center;
  }

  //Remove arrows from number field
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const Input = React.forwardRef((props, ref) => {
  return (
    <InputContainer className={props.classes}>
      <label htmlFor={props.input.id}>{props.labelName}</label>
      <InputField
        ref={ref}
        {...props.input}
        className={props.addedInputClass}
      />
      {props.isError && (
        <p style={{ color: "red", margin: "0.5rem 0 0 0" }}>
          Please enter a valid {props.errorName}
        </p>
      )}
    </InputContainer>
  );
});

export default Input;
