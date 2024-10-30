import React from "react";
import { HeaderContainer, Searchbar, ImageLogo, ImageMenu } from "@/ui/styles/Components/Header/styles";
import Image from "next/image";
import img from "@/ui/assets/images/Logo 50x50.svg";
import imgmenu from "@/ui/assets/images/menu.svg"

export function Header() {
  return (
    <HeaderContainer>
      <ImageMenu  alt="menu" src={imgmenu}/>
      <ImageLogo alt="logo" src={img} />
      <Searchbar type="text" placeholder="Search..." name="search" />
    </HeaderContainer>
  );
}

