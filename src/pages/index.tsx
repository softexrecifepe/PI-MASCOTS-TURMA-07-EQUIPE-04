import React from "react";
import SEO from "@/components/SEO";
import { HomePageTextsSEO } from "@/components/SEO/seoTexts";
import { Card } from "@/components/Card";

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
      <Card />
    </div>
  );
}
