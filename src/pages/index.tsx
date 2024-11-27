import React from "react";
import { GetServerSideProps } from "next";
import nookies from "nookies";
import SEO from "@/components/SEO";
import { HomePageTextsSEO } from "@/components/SEO/seoTexts";
import { Card } from "@/components/Card";
import imgExample from "@/ui/assets/images/Logo.svg";
import cardItems from "@/service/mocks/cardItens";
import { Container } from "@/ui/styles/Pages/home/styles";
import { verifyIdToken } from "@/service/firebaseAdmin";

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
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const cookies = nookies.get(ctx);
    const token = cookies.firebaseAuthToken;

    if (!token) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    await verifyIdToken(token);

    return { props: {} };
  } catch (err) {
    console.error("Erro de autenticação:", err);
    return {
      redirect: {
        destination: "/entrar",
        permanent: false,
      },
    };
  }
};
