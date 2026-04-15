import React from 'react';
import styled from 'styled-components';

const NavLink = styled.a`
  color: black;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: red;
  }
  @media (max-width: 599px) {
    display: none;
  }
`;

export default function Navbar() {
  return (
    <nav>
      <NavLink href="#home">Home</NavLink>
    </nav>
  );
}