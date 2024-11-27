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
} from "@/ui/styles/Pages/home/styles";
import { SecundaryButton } from "@/components/Elements/Buttons";
import { useRouter } from "next/router";
import { useHeader } from "@/contexts/HeaderContext";

export default function Home() {
  const router = useRouter();
  const navBarIsVisible = useHeader();

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

      <ButtonContainer navBarVisible={navBarIsVisible.isNavbarVisible}>
        <Title>Consultas</Title>

        <div>
          <SecundaryButton onClick={() => router.push("historico")}>
            Histórico
          </SecundaryButton>
          <SecundaryButton onClick={() => alert("Botão Secundário Clicado!")}>
            Criar Consulta
          </SecundaryButton>
        </div>
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
