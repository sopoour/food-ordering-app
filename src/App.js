import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "./Components/NavBar/NavBar";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import MealsIntro from "./Components/Meals/MealsIntro";
import CartModal from "./Components/Cart/CartModal";
import CartProvider from "./store/CartProvider";
import { device } from "./Components/UI/StyleVariables";

const AppContainer = styled.div`
  margin: auto;

  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;

function App() {
  /**
   * ? I could move the open and close handling state to context
   */

  const [openCart, setOpenCart] = useState(false);

  const handleCloseCart = () => {
    setOpenCart(false);
  };

  const handleOpenCart = () => {
    setOpenCart(true);
  };

  return (
    <CartProvider>
      {openCart && <CartModal onCloseCart={handleCloseCart} />}
      <NavBar onOpenCart={handleOpenCart} />
      <MealsIntro />
      <AppContainer>
        <AvailableMeals />
      </AppContainer>
    </CartProvider>
  );
}

export default App;
