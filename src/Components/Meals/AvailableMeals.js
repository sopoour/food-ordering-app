import React from "react";
import styled from "styled-components";
import MealItem from "./MealItem";

const AvailableMeals = (props) => {
  const MainContainer = styled.div`
    margin: 2rem;
    padding: 0.5rem;
  `;

  return (
    <MainContainer>
      {props.items.map((item) => (
        <MealItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </MainContainer>
  );
};

export default AvailableMeals;
