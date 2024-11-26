import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header/index";
import { Vetconsultation } from "@/components/AddConsulta";
import {
  Title,
  Container,
  MainContent,
  Lista,
  LeftContent,
  RightContent
} from "@/ui/styles/Pages/consultas/styles";

import { SecundaryButton } from "@/components/Elements/Buttons";

type Vetconsultation = {
  tutorName: string;
  animalName: string;
  animalAge: number;
  consultation: string;
  priority: string;
};

export default function VetQueries() {
  const [consultationsVet, setConsultationsvet] = useState<
    Vetconsultation[] | null
  >(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("vetConsultations");
    if (storedData) {
      setConsultationsvet(JSON.parse(storedData));
    }
  }, []);

  const handleClick = () => {
    console.log("Criar consulta clicado!");
    setLoading(true);
  };

  const handleCancel = () => {
    setLoading(false);
  };

  return (
    <Container>
      {/* <Header /> */}
      <Title>Consultas</Title>

      {loading ? (
        <Vetconsultation onCancel={handleCancel} />
      ) : (
        <div>
          <SecundaryButton onClick={handleClick}>
            Criar Consulta
          </SecundaryButton>
          <MainContent>
              {consultationsVet?.map((consultations, index) => (
                <Lista key={index}>
                  <LeftContent>
                    <p>Nome do Animal: <span>{consultations.animalName}</span></p>
                    <p>Nome do Tutor: <span>{consultations.tutorName}</span></p>
                    <p>Idade: <span>{consultations.animalAge}</span></p>
                  </LeftContent>
                  <RightContent>
                    <p>Tipo: <span>{consultations.consultation}</span></p>
                    <p>Prioridade: <span>{consultations.priority}</span></p>
                  </RightContent>
                </Lista>
              ))}
          </MainContent>
        </div>
      )}
    </Container>
  );
}
