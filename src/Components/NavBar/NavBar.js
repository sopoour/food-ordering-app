import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBarCartButton from "./NavBarCartButton";
import { colors } from "../UI/StyleVariables";


const Nav = styled.nav`
  width: 100%;
  min-height: 10vh;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  align-items: center;
  transition: all 0.5s ease-in;
  background: transparent;
  color: ${colors.secondary};
  padding: 0 1rem 0 1rem;

  &.scrolled {
    color: white;
    background: ${colors.secondary};
  }
`;

const NavBar = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset >= 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const navClasses = scrolled ? "scrolled" : "";

  return (
    <React.Fragment>
      <Nav className={navClasses}>
        <h1>Sopo Meal</h1>
        <NavBarCartButton onClick={props.onOpenCart} />
      </Nav>
    </React.Fragment>
  );
};

export default NavBar;
