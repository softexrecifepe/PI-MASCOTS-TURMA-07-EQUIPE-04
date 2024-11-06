import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { usePathname } from "next/navigation";
import SEO from "../SEO";
import { DefaultTextsSEO } from "../SEO/seoTexts";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const ViewLayoutComponents = pathname === "/" || pathname === "/dashboard";

  return (
    <>
      <SEO
        title={DefaultTextsSEO.title}
        description={DefaultTextsSEO.description}
        keywords={DefaultTextsSEO.keywords}
        author={DefaultTextsSEO.author}
        url={DefaultTextsSEO.url}
        image={DefaultTextsSEO.image}
      />
      {ViewLayoutComponents && <Header />}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
