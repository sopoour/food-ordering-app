import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import background from "../../assets/restaurant_image.jpg"

const IntroBox = styled(Card)`
  margin: 2rem 1rem 2rem 1rem;
  padding: 1rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);

  @media (min-width: 1024px) {
    margin: 3rem 15rem 3rem 15rem;
    padding: 2rem;
  }

  @media (min-width: 1440px) {
    padding: 5rem;
  }
`;

const IntroContainer = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
  background: repeat url(${background});
`;

const MealsIntro = () => {
  return (
    <IntroContainer > 
      <IntroBox>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </IntroBox>
    </IntroContainer>
  );
};

export default MealsIntro;
