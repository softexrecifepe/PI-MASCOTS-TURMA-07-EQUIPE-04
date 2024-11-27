import React from "react";
import { GetServerSideProps } from "next";
import nookies from "nookies";
import SEO from "@/components/SEO";
import { HomePageTextsSEO } from "@/components/SEO/seoTexts";
import { Card } from "@/components/Card";
import imgExample from "@/ui/assets/images/Logo.svg";
import cardItems from "@/service/mocks/cardItens";
import {
  Container,
  Title,
  ButtonContainer,
  GroupCards,
} from "@/ui/styles/Pages/home/styles"; // Importando os novos estilos
import { SecundaryButton } from "@/components/Elements/Buttons"; // Importando o botão secundário

export default function Home() {
  return (
    <Container>
      <SEO
        title={HomePageTextsSEO.title}
        description={HomePageTextsSEO.description}
        keywords={HomePageTextsSEO.keywords}
        author={HomePageTextsSEO.author}
        url={HomePageTextsSEO.url}
        image={HomePageTextsSEO.image}
      />

      <ButtonContainer>
        <Title>Consultas</Title>
        <SecundaryButton onClick={() => alert("Botão Secundário Clicado!")}>
          Criar Consulta
        </SecundaryButton>
      </ButtonContainer>

      <GroupCards>
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
      </GroupCards>
    </Container>
  );
}
