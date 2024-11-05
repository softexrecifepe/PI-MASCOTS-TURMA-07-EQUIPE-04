import React from "react";
import SEO from "@/components/SEO";
import { HomePageTextsSEO } from "@/components/SEO/seoTexts";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";

export default function Home() {
  const seoText = HomePageTextsSEO;

  return (
    <div>
      <Header />
      <SEO
        title={seoText.title}
        description={seoText.description}
        keywords={seoText.keywords}
        author={seoText.author}
        url={seoText.url}
        image={seoText.image}
      />

      <h1>home page</h1>
    </div>
  );
}
