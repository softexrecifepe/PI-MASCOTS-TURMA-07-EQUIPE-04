import React from "react";
import {
  HeaderContainer,
  LeftGroup,
  RightGroup,
  StyledInput,
  MenuWrappe,
  IconSearch,
  StyledInputContainer,
} from "@/ui/styles/Components/Header/styles";
import logo from "@/ui/assets/images/Logo 50x50.svg";
import menu from "@/ui/assets/images/menu.svg";
import Image from "next/image";
import imgnotification from "@/ui/assets/icons/Notoficstion icon.svg";
import iconprofile from "@/ui/assets/icons/Vector.svg";
import iconsearch from "@/ui/assets/icons/Search.svg";

export function Header() {
  return (
    <HeaderContainer>
      <LeftGroup>
        <MenuWrappe alt="menu" src={menu} />
        <Image alt="logo" src={logo} />
      </LeftGroup>

      <StyledInput type="text" name="search" />

      <RightGroup>
        <Image alt="notification" src={imgnotification} />
        <Image alt="Iconprofile" src={iconprofile} />
      </RightGroup>
    </HeaderContainer>
  );
}

