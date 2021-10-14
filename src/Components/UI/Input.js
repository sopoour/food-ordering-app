import styled from "styled-components";
import React from "react";
import { device } from "./StyleVariables";

const InputContainer = styled.div`
  font-size: 16px;
  margin-top: 1rem;

  @media ${device.tablet} {
    margin-top: 0;
  }
`;

const InputField = styled.input`
  border-radius: 5px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  border: none;
  width: 2.5rem;
  height: 1rem;
  text-align: center;
  margin-left: 1rem;
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
    <InputContainer>
      <label htmlFor={props.input.id}>{props.labelName}</label>
      <InputField ref={ref} {...props.input} />
    </InputContainer>
  );
});

export default Input;
