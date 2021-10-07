import React, { useState } from "react";
import styled from "styled-components";
import CartButton from "./CartButton";
import CartModal from "../Cart/CartModal";
import { colors } from "../UI/StyleVariables";

const NavBar = (props) => {
  const [openCart, setOpenCart] = useState(false);

  const Nav = styled.nav`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 1.5rem;
    background: ${colors.secondary};
    color: white;
  `;

  const handleCartButtonClick = () => {
    setOpenCart(true);
  };

  const handleClose = () => {
    setOpenCart(false);
  };

  return (
    <React.Fragment>
      {openCart && <CartModal onClose={handleClose}/>}
      <Nav>
        <h1>Sopo Meal</h1>
        <CartButton onClick={handleCartButtonClick} />
      </Nav>
    </React.Fragment>
  );
};

export default NavBar;
