import React from "react";
import { Itens, LayoutContainer } from "@/ui/styles/Components/Navbar/styles";
import { itens } from "./itens";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import LogoutIcon from "@/ui/assets/icons/Logout ";

interface NavbarProps {
  $isVisible: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ $isVisible }) => {
  const router = useRouter();

  const handleNavigation = (path: string) => () => router.push(path);

  return (
    <LayoutContainer $isVisible={$isVisible}>
      {itens.map((item) => (
        <Itens key={item.id} onClick={handleNavigation(item.path)}>
          <div>{item.icon}</div>
          <div>{item.title}</div>
        </Itens>
      ))}

      <Itens onClick={() => signOut}>
        <div>
          <LogoutIcon />
        </div>
        <div>Sair</div>
      </Itens>
    </LayoutContainer>
  );
};
