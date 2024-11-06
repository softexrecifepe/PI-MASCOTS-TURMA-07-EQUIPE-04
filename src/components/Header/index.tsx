import React, { useState } from "react";
import {
  HeaderContainer,
  Icons,
  LeftGroup,
  RightGroup,
  StyledInput,
} from "@/ui/styles/Components/Header/styles";
import logo from "@/ui/assets/images/Logo 50x50.svg";
import Image from "next/image";
import { Navbar } from "../Navbar";
import NotificationIcon from "@/ui/assets/icons/Notification";
import ProfileIcon from "@/ui/assets/icons/Profile";
import MenuIcon from "@/ui/assets/icons/menu";
import { useRouter } from "next/router";

export function Header() {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [isProfileVisible, setProfileVisible] = useState(false);
  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const router = useRouter();

  return (
    <>
      <HeaderContainer>
        <LeftGroup>
          <Icons onClick={() => setNavbarVisible(!isNavbarVisible)}>
            <MenuIcon />
          </Icons>

          <Image alt="logo" src={logo} onClick={() => router.push("/")} />
        </LeftGroup>

        <StyledInput type="text" name="search" />

        <RightGroup>
          <Icons onClick={() => setNotificationVisible(!isNotificationVisible)}>
            <NotificationIcon />
          </Icons>

          <Icons onClick={() => setProfileVisible(!isProfileVisible)}>
            <ProfileIcon />
          </Icons>
        </RightGroup>
      </HeaderContainer>

      <Navbar $isVisible={isNavbarVisible} />
    </>
  );
}
