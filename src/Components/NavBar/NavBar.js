import React from "react";
import styled from "styled-components";
import CartButton from "./CartButton";
import { colors } from "../UI/StyleVariables";


const NavBar = (props) => {
  const Nav = styled.nav`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 1.5rem;
    background: ${colors.secondary};
    color: white;
  `;

  return (
    <Nav>
      <h1>Sopo Meal</h1>
      <CartButton />
    </Nav>
  );
};

export default NavBar;