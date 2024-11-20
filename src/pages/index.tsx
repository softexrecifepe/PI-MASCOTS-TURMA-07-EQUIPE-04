import React from "react";
import SEO from "@/components/SEO";
import { HomePageTextsSEO } from "@/components/SEO/seoTexts";
import { Card } from "@/components/Card";
import imgExample from "@/ui/assets/images/Logo.svg";
import cardItems from "@/service/mocks/cardItens";

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

      {cardItems.map((card) => (
        <Card
          key={card.id}
          image={card.imageUrl || imgExample.src}
          animalName={card.animalName}
          date={card.date}
          hour={card.hour}
          description={card.description}
        />
      ))}
    </div>
  );
}
