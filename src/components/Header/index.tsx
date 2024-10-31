import React from "react";
import { HeaderContainer, StyledInput, ImageLogo, ImageMenu, Notification, Iconprofile } from "@/ui/styles/Components/Header/styles";
import Image from "next/image";
import img from "@/ui/assets/images/Logo 50x50.svg";
import imgmenu from "@/ui/assets/images/menu.svg"
import imgnotification from "@/ui/assets/icons/Notoficstion icon.svg"
import iconprofile from "@/ui/assets/icons/Vector.svg"

export function Header() {
  return (
    <HeaderContainer>
      <ImageMenu  alt="menu" src={imgmenu}/>
      <ImageLogo alt="logo" src={img} />
      <StyledInput type="text" placeholder="Search..." name="search" />
      <Notification alt="notification" src={imgnotification}/>
      <Iconprofile alt="Iconprofile" src={iconprofile}/>

    </HeaderContainer>
  );
}

