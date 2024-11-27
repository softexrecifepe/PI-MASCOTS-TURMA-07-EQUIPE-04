import React, { useState } from "react";
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
import { Vetconsultation } from "@/components/AddConsulta";

export default function Home() {
  const router = useRouter();
  const navBarIsVisible = useHeader();
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false); // Estado para controlar a exibição do formulário de criação de consulta

  const handleCreateConsultationClick = () => {
    setIsFormVisible(true); // Exibe o formulário de criação de consulta
  };

  const handleCancelForm = () => {
    setIsFormVisible(false); // Fecha o formulário sem salvar
  };

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

      {/* Se o formulário não estiver visível, mostra os botões e cards */}
      {!isFormVisible ? (
        <ButtonContainer navBarVisible={navBarIsVisible.isNavbarVisible}>
          <Title>Consultas</Title>

          <div>
            <SecundaryButton onClick={() => router.push("historico")}>
              Histórico
            </SecundaryButton>
            <SecundaryButton onClick={handleCreateConsultationClick}>
              Criar Consulta
            </SecundaryButton>
          </div>
        </ButtonContainer>
      ) : (
        <Vetconsultation onCancel={handleCancelForm} />
      )}

      {!isFormVisible && (
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
      )}
    </Container>
  );
}
