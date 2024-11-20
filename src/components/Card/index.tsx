import {
  ImageWrapper,
  Container,
  Header,
  DateTimeGroup,
} from "@/ui/styles/Components/Card/styles";
import Image from "next/image";
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
      <Header>
        <ImageWrapper>
          <Image
            src={image}
            alt={animalName || "Animal"}
            layout="fill"
            objectFit="cover"
          />
        </ImageWrapper>
        <div>{animalName}</div>
      </Header>

      <DateTimeGroup>
        <div>Data: {date}</div>
        <div>horário: {hour}</div>
      </DateTimeGroup>

      <div>descrição: {description}</div>

      <button>Editar</button>
    </Container>
  );
};
