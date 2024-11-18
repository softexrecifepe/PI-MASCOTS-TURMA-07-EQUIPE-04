import { AnimalImage, Container } from "@/ui/styles/Components/Card/styles";
import React from "react";

interface CardProps {
  children?: React.ReactNode;
  image: string;
  animalName?: string;
  date?: string;
  hour?: string;
  description?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  image,
  animalName,
  date,
  hour,
  description,
}) => {
  return (
    <Container>
      <div>
        <AnimalImage src={image} alt={animalName ? animalName : "Animal"} />
        <div>nome do animal: {animalName}</div>
      </div>

      <div>
        <div>Data: {date}</div>
        <div>horário: {hour}</div>
      </div>
      <div>descrição: {description}</div>

      <button>Editar</button>
    </Container>
  );
};
