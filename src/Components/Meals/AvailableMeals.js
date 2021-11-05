import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import MealItem from "./MealItem";

const MainContainer = styled.ul`
  display: flex;
  //mobile-friendly by default:
  flex-flow: column wrap;
  margin: 1rem;
  padding: 0.5rem;
  list-style-type: none;
`;

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [httpError, setHttpError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    const response = await fetch(
      "https://react-project-exercise-default-rtdb.europe-west1.firebasedatabase.app/Meals.json"
    );

    if (!response.ok) {
      console.log("I'm here")
      throw new Error("Something went wrong!");
    }

    const data = await response.json();

    let loadedFood = [];

    for (const key in data) {
      loadedFood.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }
    console.log(loadedFood);

    setMeals(loadedFood);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [fetchData]);

  return (
    <MainContainer>
      {!isLoading &&
        meals.length > 0 &&
        meals.map((item) => (
          <MealItem
            id={item.id}
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      {!isLoading && httpError && <p>{httpError}</p>}
      {isLoading && <p>Loading...</p>}
    </MainContainer>
  );
};

export default AvailableMeals;
