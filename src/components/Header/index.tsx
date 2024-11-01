import React from "react";
import { HeaderContainer, StyledInputContainer, StyledInput, ImageLogo, ImageMenu, Notification, Iconprofile, IconSearch } from "@/ui/styles/Components/Header/styles";
import Image from "next/image";
import img from "@/ui/assets/images/Logo 50x50.svg";
import imgmenu from "@/ui/assets/images/menu.svg";
import imgnotification from "@/ui/assets/icons/Notoficstion icon.svg";
import iconprofile from "@/ui/assets/icons/Vector.svg";
import iconsearch from "@/ui/assets/icons/Search.svg";

export function Header() {
  return (
    <HeaderContainer>
      <ImageMenu alt="menu" src={imgmenu} />
      <ImageLogo alt="logo" src={img} />
      <StyledInputContainer>
        <IconSearch alt="search icon" src={iconsearch} />
        <StyledInput type="text" name="search" />
      </StyledInputContainer>
      <Notification alt="notification" src={imgnotification} />
      <Iconprofile alt="Iconprofile" src={iconprofile} />
    </HeaderContainer>
  );
}

