import React from "react";
import { HeaderContainer, Searchbar, Imagestyle } from "@/ui/styles/Components/Header/styles";
import Image from "next/image";
import img from "@/ui/assets/images/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <Imagestyle alt="Logo" src={img} />
      <Searchbar type="text" placeholder="Search..." name="search" />
    </HeaderContainer>
  );
}

