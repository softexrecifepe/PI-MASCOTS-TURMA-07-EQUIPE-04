import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
