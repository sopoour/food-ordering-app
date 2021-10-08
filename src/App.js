import React, {useState} from "react";
import NavBar from "./Components/NavBar/NavBar";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import MealsIntro from "./Components/Meals/MealsIntro";
import CartModal from "./Components/Cart/CartModal";
import CartProvider from "./store/CartProvider";

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
      <NavBar onOpenCart={handleOpenCart}/>
      <MealsIntro />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
