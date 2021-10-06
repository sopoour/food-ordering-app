import React from "react";
import ReactDom from "react-dom";
import Cart from "./Cart";
import styled from "styled-components";

const Backdrop = (props) => {
  const BackdropContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
  `;
  //The backdrop adds a black overlay background behind the modal which restricts the interactivity with the rest of the page
  //& with onClick in that background the modal also closes
  return <BackdropContainer onClick={props.onClose} />;
};

const CartModal = (props) => {
  return (
    <React.Fragment>
      {/*
       * Port the Backdrop component to the div with ID backdrop-root within the HTML
       * By using portals we can move the error modal outside of the initial root div side by side within the body (see generated HTML in Inspect)
       * Since a modal is something that comes on top of it but doesn't live within the rest of the content it makes more sense to move it outside of the root div
       */}
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Cart
          onClose={props.onClose}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default CartModal;
