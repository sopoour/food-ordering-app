import styled from "styled-components";
import React from "react";

const InputContainer = styled.div`
  font-size: 16px;
`;

const InputField = styled.input`
  border-radius: 5px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  border: none;
  width: 3rem;
  height: 1rem;
  text-align: center;
  margin-left: 1rem;
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
