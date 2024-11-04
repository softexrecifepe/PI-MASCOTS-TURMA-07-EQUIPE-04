import React from "react";
import { Container, Itens } from "@/ui/styles/Components/Navbar/styles";
import { itens } from "./itens";

interface NavbarProps {
  isVisible: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isVisible }) => {
  return (
    <Container isVisible={isVisible}>
      {itens.map((item) => (
        <Itens key={item.id}>
          {item.icon}
          {item.title}
        </Itens>
      ))}
    </Container>
  );
};
