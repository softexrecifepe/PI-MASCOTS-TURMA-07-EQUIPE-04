import React, { createContext, useContext, useState } from "react";

interface HeaderContextProps {
  isNavbarVisible: boolean;
  toggleNavbar: () => void;
  isProfileVisible: boolean;
  toggleProfile: () => void;
  isNotificationVisible: boolean;
  toggleNotification: () => void;
}

const HeaderContext = createContext<HeaderContextProps | undefined>(undefined);

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [isProfileVisible, setProfileVisible] = useState(false);
  const [isNotificationVisible, setNotificationVisible] = useState(false);

  const toggleNavbar = () => setNavbarVisible((prev) => !prev);
  const toggleProfile = () => setProfileVisible((prev) => !prev);
  const toggleNotification = () => setNotificationVisible((prev) => !prev);

  return (
    <HeaderContext.Provider
      value={{
        isNavbarVisible,
        toggleNavbar,
        isProfileVisible,
        toggleProfile,
        isNotificationVisible,
        toggleNotification,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader deve ser usado dentro de um HeaderProvider");
  }
  return context;
};
