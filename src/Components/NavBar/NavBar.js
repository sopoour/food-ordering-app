import React from "react";
import styled from "styled-components";
import NavBarCartButton from "./NavBarCartButton";
import { colors } from "../UI/StyleVariables";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: ${colors.secondary};
  color: white;
  z-index: 10;
`;

const NavBar = (props) => {

  return (
    <React.Fragment>
      <Nav>
        <h1>Sopo Meal</h1>
        <NavBarCartButton onClick={props.onOpenCart} />
      </Nav>
    </React.Fragment>
  );
};

export default NavBar;
