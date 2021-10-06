import React, { useState } from "react";
import styled from "styled-components";
import CartButton from "./CartButton";
import CartModal from "../Cart/CartModal";
import { colors } from "../UI/StyleVariables";

const NavBar = (props) => {
  const [cart, setCart] = useState(false);

  const Nav = styled.nav`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 1.5rem;
    background: ${colors.secondary};
    color: white;
  `;

  const handleCartButtonClick = () => {
    setCart(true);
  };

  const handleClose = () => {
    setCart(false);
  };

  return (
    <React.Fragment>
      {cart && <CartModal onClose={handleClose}/>}
      <Nav>
        <h1>Sopo Meal</h1>
        <CartButton onClick={handleCartButtonClick} />
      </Nav>
    </React.Fragment>
  );
};

export default NavBar;
