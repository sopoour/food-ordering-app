import React from "react";
import styled from "styled-components";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MainContainer = styled.ul`
  display: flex;
  //mobile-friendly by default:
  flex-flow: column wrap;
  margin: 1rem;
  padding: 0.5rem;
  list-style-type: none;
`;

const AvailableMeals = () => {
  return (
    <MainContainer>
      {DUMMY_MEALS.map((item) => (
        <MealItem
          id={item.id}
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
