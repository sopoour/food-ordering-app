import React, { useReducer } from "react";
import CartContext from "./cart-context";

//define initial state
const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalPrice =
      state.totalPrice + action.item.price * action.item.amount;
    //findIndex finds the index of an item in an array
    //it takes a function that returns true if it's the item we're looking for
    const existingCartItemsIndex = state.items.findIndex(
      //is there an item in the existing array of items that matches the id of the item that we are about to add
      //if true it returns the index of that item
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemsIndex];
    let updatedItems;

    //if there is an existingCartItem (which only is true if there is a matching index)
    //then DON'T add the added item BUT just update the amount of existing item
    if (existingCartItem) {
      const updatedItem = {
        //copy existing cart item
        ...existingCartItem,
        //update the amount with the amount of added item
        amount: existingCartItem.amount + action.item.amount,
      };
      //the updatedItems is a new array into which I copy the existing items
      updatedItems = [...state.items];
      //replace the existing item with the updated item
      updatedItems[existingCartItemsIndex] = updatedItem;
    } else {
      //concat doesn't just push a new item into the array but creates a new array --> immutable way
      //initial state is an empty array (cf. defaultCartState)
      //add the entire item object to the items array
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemsIndex = state.items.findIndex(
      // we are only dispatching an object that has the id so we only check that
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemsIndex];
    //change the total price by subtracting the price of removing item
    const updatedTotalPrice = state.totalPrice - existingCartItem.price;
    let updatedItems;
    //if the item only exists once (hence it's the last item) we want to remove the entire item from the array
    if (existingCartItem.amount === 1) {
      //return a new array that has that removed item with that specific id filtered out, hence removed
      //the array contains all items that don't match with the removed item's id (action.id)
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // if it's bigger than one, we want to keep the item in the array and just decrease the amount by 1
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      //replace respective item with the item that has the updated amount
      updatedItems = [...state.items];
      updatedItems[existingCartItemsIndex] = updatedItem;
    }
    //return new state object
    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
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
  };

  const handleRemoveItem = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  return (
    <CartContext.Provider
      value={{
        totalPrice: cartState.totalPrice,
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
