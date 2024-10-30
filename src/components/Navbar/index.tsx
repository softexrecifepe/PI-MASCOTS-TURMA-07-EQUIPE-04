import React from "react";
import { Container } from "@/ui/styles/Components/Navbar/styles";
import { itens } from "./itens";

export const Navbar: React.FC = () => {
  return (
    <Container>
      {itens.map((item) => (
        <div key={item.id}>
          {item.icon}
          {item.title}
        </div>
      ))}
    </Container>
  );
};
