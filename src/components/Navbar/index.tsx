import React from "react";
import { Container, Itens } from "@/ui/styles/Components/Navbar/styles";
import { itens } from "./itens";

export const Navbar: React.FC = () => {
  return (
    <Container>
      {itens.map((item) => (
        <Itens key={item.id}>
          {item.icon}
          {item.title}
        </Itens>
      ))}
    </Container>
  );
};
