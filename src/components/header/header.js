import React from "react";

//style
import { Container, Title, Search } from "./header.style";

// //locals

const Header = () => {
  return (
    <>
      <Container>
        <Title>Star Wars Universe</Title>
        <Search placeholder="Pesquisar Personagens" />
      </Container>
    </>
  );
};

export default Header;
