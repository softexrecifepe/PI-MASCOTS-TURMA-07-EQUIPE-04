import React, { useState } from "react";
import {
  HeaderContainer,
  LeftGroup,
  RightGroup,
  StyledInput,
  MenuWrappe,
  Iconprofile,
} from "@/ui/styles/Components/Header/styles";
import logo from "@/ui/assets/images/Logo 50x50.svg";
import menu from "@/ui/assets/images/menu.svg";
import Image from "next/image";
import imgnotification from "@/ui/assets/icons/Notoficstion icon.svg";
import iconprofile from "@/ui/assets/icons/Vector.svg";
import { Navbar } from "../Navbar";

export function Header() {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [isProfileVisible, setProfileVisible] = useState(false);

  // Função para alternar a visibilidade da Navbar
  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  const viewprofile = () => {
    setProfileVisible(!isProfileVisible)
  }


  return (
    <>
      <HeaderContainer>
        <LeftGroup>
          <MenuWrappe onClick={toggleNavbar}>
            <Image src={menu} alt="Menu" />
          </MenuWrappe>
          <Image alt="logo" src={logo} />
        </LeftGroup>

        <StyledInput type="text" name="search" />

        <RightGroup>
          <Image alt="notification" src={imgnotification} />
          <Iconprofile onClick={viewprofile} alt="Iconprofile" src={iconprofile} />
        </RightGroup>
      </HeaderContainer>

      {/* Renderiza a Navbar se isNavbarVisible for true */}
      {isNavbarVisible && <Navbar />}
      {/* {isProfileVisible && <Profile />} */}
    </>
  );
}

