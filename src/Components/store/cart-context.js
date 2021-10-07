import React, { useState, useEffect } from "react";

//an object that also contains components
const CartContext = React.createContext({
  onAdd: () => {},
});

//To destructure and pull out more out of the App component --> Creae a separate Context Management Component

export const CartContextProvider = (props) => {
  //By having all the below with state, useEffect and handlers in this context management component we can remove it all from App component
  const [cartItems, setCartItems] = useState({
      name: "",
      price: "",
      amount: +""
  });

  //don't add any dependencies since we want to run this only once when the page loads to check whether user is logged in and not everytime some state changes
  //here better to use useEffect() than handling it without in order to avoid an infinite loop of checking the local storage for every component render cycle
  //hence handle it as side-effect in a useEffect
  /* useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");

    if (storedLogin === "1") {
      setIsLoggedIn(true);
    }
  }, []); */

  const addToCartHandler = () => {
    console.log("added")
  };


  return (
    <CartContext.Provider
      value={{
        onAdd: {addToCartHandler}
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
