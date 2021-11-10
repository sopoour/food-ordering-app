import React from "react";

//an object that also contains components
const CartContext = React.createContext({
  totalPrice: 0,
  items: [],
  onAdd: (item) => {},
  onRemove: (id) => {},
  clearCart: () => {},
});

//To destructure and pull out more out of the App component --> Creae a separate Context Management Component

export default CartContext;
