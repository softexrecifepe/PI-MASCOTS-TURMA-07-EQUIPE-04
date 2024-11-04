import React from "react";
import SEO from "@/components/SEO";
import { HomePageTextsSEO } from "@/components/SEO/seoTexts";
import { Button } from "@/components/Button";

export default function Home() {
  const seoText = HomePageTextsSEO;

  return (
    <div>
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
