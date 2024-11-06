import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const ViewLayoutComponents = pathname === "/" || pathname === "/dashboard";

  return (
    <>
      {ViewLayoutComponents && <Header />}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
