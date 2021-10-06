import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";

const MealsIntro = () => {
  const IntroContainer = styled(Card)`
    margin: 5rem 15rem 5rem 15rem;
    padding: 2rem;
    text-align: center;
    background: rgba(255, 255, 255, 0.9);
  `;

  const Background = styled.div`
    padding: 1rem;
    width: 100%;
    height: 100%;
    background-image: url("./restaurant_image.jpg");
  `;

  return (
    <Background>
      <IntroContainer>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </IntroContainer>
    </Background>
  );
};

export default MealsIntro;
