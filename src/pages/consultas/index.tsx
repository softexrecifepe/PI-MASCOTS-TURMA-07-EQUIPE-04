import React, {useEffect, useState} from "react";
import { Header } from "@/components/Header/index";
import { Vetconsultation } from "@/components/Criar_Consulta";
import { Title, MainContent, Div, Lista } from "@/ui/styles/Components/consultas/styles";
import { SecondaryButtonStyle } from "@/ui/styles/Components/Criar_consulta/styles";


type Vetconsultation = {
  tutorName: string;
  animalName: string;
  animalAge: number;
  consultation: string;
  priority: string;
};

export default function VetQueries() {

  const [consultationsVet, setConsultationsvet] = useState<Vetconsultation[] | null>(null);
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

    

    const handleCancel = () =>{
      setLoading(false);
    }

  return (
    <div>
      <Header />
        <Title>Consultas</Title>

        {loading ? (
          <Vetconsultation onCancel={handleCancel}/>
        ): (
          <div>
            <SecondaryButtonStyle onClick={handleClick}>Criar Consulta</SecondaryButtonStyle>
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
    </div>
  );
}
