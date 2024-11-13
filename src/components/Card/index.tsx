import { AnimalImage, Container } from "@/ui/styles/Components/Card/styles";
import React from "react";

interface CardProps {
  children?: React.ReactNode;
  image: string;
  name?: string;
  date?: string;
  hour?: string;
  description?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  name,
  date,
  hour,
  description,
}) => {
  return (
    <Container>
      <div>
        <AnimalImage src={image} alt={name ? name : "Animal"} />
        <div>nome do animal: {name}</div>
      </div>

      <div>
        <div>Data: {date}</div>
        <div>horário: {hour}</div>
      </div>
      <div>descrição: {description}</div>
    </Container>
  );
};
