import React, {useState} from "react";
import { Header } from "@/components/Header/index";
import { Vetconsultation } from "@/components/Criar_consulta";
import { Title, MainContent } from "@/ui/styles/Components/consultas/styles";

export default function VetQueries() {

  return (
    <>
      <Header />
      <MainContent>
        <Title>Consultas</Title>
        <Vetconsultation />
      </MainContent>
    </>
  );
}
