import React from "react";
import ReactDom from "react-dom";
import Cart from "./Cart";
import styled from "styled-components";

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const Backdrop = (props) => {
  //The backdrop adds a black overlay background behind the modal which restricts the interactivity with the rest of the page
  //& with onClick in that background the modal also closes
  return <BackdropContainer onClick={props.onCloseCart} />;
};

const CartModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onCloseCart={props.onCloseCart} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Cart onCloseCart={props.onCloseCart} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default CartModal;
