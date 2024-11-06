import React from "react";
import { Container, Itens } from "@/ui/styles/Components/Navbar/styles";
import { itens } from "./itens";
import { useRouter } from "next/router";

interface NavbarProps {
  $isVisible: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ $isVisible }) => {
  const router = useRouter();
  const handleNavigation = (path: string) => () => router.push(path);

  return (
    <Container $isVisible={$isVisible}>
      {itens.map((item) => (
        // <Itens key={item.id} onClick={() => handleNavigation(item.path)}>
        <Itens key={item.id} onClick={handleNavigation(item.path)}>
          <div>{item.icon}</div>
          <div>{item.title}</div>
        </Itens>
      ))}
    </Container>
  );
};
