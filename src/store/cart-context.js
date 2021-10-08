import React, { useState } from "react";

//an object that also contains components
const CartContext = React.createContext({
  totalAmount: 0,
  items: [],
  onAdd: (item) => {},
  onRemove: (id) => {},
});

//To destructure and pull out more out of the App component --> Creae a separate Context Management Component

export default CartContext;
