import React, { useState } from "react";
import {
  HeaderContainer,
  LeftGroup,
  RightGroup,
  StyledInput,
  MenuWrappe,
  Iconprofile,
  ImageNotification,
} from "@/ui/styles/Components/Header/styles";
import logo from "@/ui/assets/images/Logo 50x50.svg";
import Image from "next/image";
import imgnotification from "@/ui/assets/icons/Notoficstion icon.svg";
import iconprofile from "@/ui/assets/icons/Vector.svg";
import { Navbar } from "../Navbar";
import NotificationIcon from "@/ui/assets/icons/Notification";
import ProfileIcon from "@/ui/assets/icons/Profile";
import MenuIcon from "@/ui/assets/icons/menu";

export function Header() {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [isProfileVisible, setProfileVisible] = useState(false);
  const [isNotificationVisible, setNotificationVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  const viewprofile = () => {
    setProfileVisible(!isProfileVisible);
  };

  const viewisNotification = () => {
    setNotificationVisible(!isNotificationVisible);
  };

  return (
    <>
      <HeaderContainer>
        <LeftGroup>
          <MenuWrappe onClick={toggleNavbar}>
            <MenuIcon />
          </MenuWrappe>
          <Image alt="logo" src={logo} />
        </LeftGroup>

        <StyledInput type="text" name="search" />

        <RightGroup>
          {/* <ImageNotification
            onClick={viewisNotification}
            alt="notification"
            src={imgnotification}
          /> */}
          <NotificationIcon />

          {/* <Iconprofile
            onClick={viewprofile}
            alt="Iconprofile"
            src={iconprofile}
          /> */}

          <ProfileIcon />
        </RightGroup>
      </HeaderContainer>

      <Navbar $isVisible={isNavbarVisible} />
    </>
  );
}
