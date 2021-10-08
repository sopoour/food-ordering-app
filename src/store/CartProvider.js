import React, { useReducer } from "react";
import CartContext from "./cart-context";

//define initial state
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  /**
   * TODO: watch the 146 video again and understand the existingCartItem logic!!
   * ? What exactly does findIndex?
   * ? What part ensures that the duplicated item is not displayed?
   */
  if (action.type === "ADD") {
    //findIndex finds the index of an item in an array
    //it takes a function that returns true if it's the item we're looking for
    const existingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemsIndex];
    let updatedItems;

    //check if item already exists in the array
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemsIndex] = updatedItem;
    } else {
      //concat doesn't just push a new item into the array but creates a new array --> immutable way
      //initial state is an empty array (cf. defaultCartState)
      //add the entire item object to the items array
      updatedItems = state.items.concat(action.item);
    }
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  //dispatchCartAction calls the reducer function, cartState is the updated state
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const handleAddItem = (item) => {
    dispatchCartAction({ type: "ADD", item: item });

    /* setAmountInput((prevCount) => {
      return prevCount + 1;
    });

    const addedCartItem = {
      id: Math.random().toString(),
      name: props.name,
      price: props.price,
      amount: amountInput,
    };

    setCartItems((prevItems) => {
      return [...prevItems, addedCartItem];
    });

    console.log(cartItems); */
  };

  const handleRemoveItem = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  return (
    <CartContext.Provider
      value={{
        totalAmount: cartState.totalAmount,
        items: cartState.items,
        onAdd: handleAddItem,
        onRemove: handleRemoveItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
