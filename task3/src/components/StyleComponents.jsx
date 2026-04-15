import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: var(--primary-color);
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = styled.footer`
  background-color: var(--primary-color);
  color: white;
  padding: 10px;
  text-align: center;
  bottom: 0;
  width: 100%;
`;

export default function StyleComponents() {
  return (
    <div>
      <Header><h1>My Brand Header</h1></Header>
      <main><p>Content goes here...</p></main>
      <Footer><h4>My Brand Footer</h4></Footer>
    </div>
  )
}