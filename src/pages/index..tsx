import SEO from "@/components/SEO";
import React from "react";
import { HomePageTextsSEO } from "@/components/SEO/SeoTexts";

export default function Home() {
  return (
    <div>
      <SEO
        title={HomePageTextsSEO.title}
        description={HomePageTextsSEO.description}
        keywords={HomePageTextsSEO.keywords}
        author={HomePageTextsSEO.author}
        url={HomePageTextsSEO.url}
        image={HomePageTextsSEO.image}
      />
      <div></div>
    </div>
  );
}
