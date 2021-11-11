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

  // TODO: Figure out why it doesn't show the error message and instead it shows a "failed to fetch"

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://react-project-exercise-default-rtdb.europe-west1.firebasedatabase.app/Meals.json"
      );
  
      if (!response.ok) {
        throw new Error("Something went wrong with fetching the meals data!");
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
  
      setMeals(loadedFood);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHttpError(error.message);
    }
    
  }, []);

  useEffect(() => {
    fetchData();
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
