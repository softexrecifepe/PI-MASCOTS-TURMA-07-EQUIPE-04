import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header/index";
import { Vetconsultation } from "@/components/AddConsulta";
import {
  Title,
  MainContent,
  Div,
  Lista,
} from "@/ui/styles/Components/consultas/styles";
import { Container } from "@/ui/styles/Pages/consultas/styles";
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
      <Header />
      <Title>Consultas</Title>

      {loading ? (
        <Vetconsultation onCancel={handleCancel} />
      ) : (
        <div>
          <SecundaryButton onClick={handleClick}>
            Criar Consulta
          </SecundaryButton>
          <MainContent>
            <Div>
              {consultationsVet?.map((consultations, index) => (
                <Lista key={index}>
                  <p>Nome do Tutor: {consultations.tutorName}</p>
                  <p>Nome do Animal: {consultations.animalName}</p>
                  <p></p>
                </Lista>
              ))}
            </Div>
          </MainContent>
        </div>
      )}
    </Container>
  );
}
