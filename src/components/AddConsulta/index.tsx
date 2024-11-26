import React, { useEffect, useState } from "react";
import {
  Alert,
  Container,
  Form,
  FormGroup,
  Heading,
  Input,
  Label,
  Select,
} from "@/ui/styles/Components/AddConsulta/styles";
import { SecondaryButtonStyle } from "@/ui/styles/Components/Elements/Buttons/styles";

type VetconsultationType = {
  tutorName: string;
  animalName: string;
  animalAge: number;
  consultation: string;
  priority: string;
};

interface VetconsultationProps {
  onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSubmitSuccess: () => void;
}

export function Vetconsultation({ onCancel, onSubmitSuccess }: VetconsultationProps) {
  const [formData, setFormData] = useState<VetconsultationType>({
    tutorName: "",
    animalName: "",
    animalAge: 0,
    consultation: "Check-up",
    priority: "low",
  });
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [isError, setError] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.tutorName ||
      !formData.animalName ||
      formData.animalAge <= 0
    ) {
      setAlertMessage("Todos os campos devem ser preenchidos corretamente!");
      setError(true);
      setTimeout(() => setAlertMessage(null), 3000);
      return;
    }

    try {
      const existingData = localStorage.getItem("vetConsultations");
      const consultations = existingData ? JSON.parse(existingData) : [];

      consultations.push(formData);

      localStorage.setItem("vetConsultations", JSON.stringify(consultations));

      setAlertMessage("Consulta salva com sucesso!");
      setError(false);

      setFormData({
        tutorName: "",
        animalName: "",
        animalAge: 0,
        consultation: "checkup",
        priority: "low",
      });

      setTimeout(() => {
        setAlertMessage(null);
        onSubmitSuccess(); // Chama a função de sucesso após salvar
      }, 1500);

    } catch (error) {
      console.error("Erro ao salvar consulta no localStorage:", error);
      setAlertMessage("Erro ao salvar consulta.");
      setError(true);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("vetConsultations");
    if (storedData) {
      console.log("Consultas Salvas:", JSON.parse(storedData));
    } else {
      console.log("Nenhuma consulta salva.");
    }
  }, []);

  return (
    <Container>
      <Heading>Criar Consulta</Heading>
      <Form>
        <FormGroup>
          <Label htmlFor="tutor-name">Nome do tutor: </Label>
          <Input
            type="text"
            id="tutor-name"
            name="tutorName"
            value={formData.tutorName}
            onChange={handleChange}
            placeholder="digite o nome do tutor"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="animal-name">Nome do animal:</Label>
          <Input
            type="text"
            id="animal-name"
            name="animalName"
            value={formData.animalName}
            onChange={handleChange}
            placeholder="digite o nome do animal"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="animal-age">Idade (Animal):</Label>
          <Input
            type="number"
            id="animal-age"
            name="animalAge"
            value={formData.animalAge}
            onChange={handleChange}
            placeholder="digite a idade do animal"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="consultation">Consulta Desejada:</Label>
          <Select
            name="consultation"
            id="consultation"
            value={formData.consultation}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              Seleciona
            </option>
            <option value="Check-up">Check-up</option>
            <option value="Vacinação">Vacinação</option>
            <option value="Cirurgia">Cirurgia</option>
            <option value="Rotina">Rotina</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="priority">Prioridade:</Label>
          <Select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </Select>
        </FormGroup>
        <SecondaryButtonStyle type="submit" onClick={handleSubmit}>
          Adicionar Consulta
        </SecondaryButtonStyle>

        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </Form>
      {alertMessage && <Alert isError={isError}>{alertMessage}</Alert>}{" "}
    </Container>
  );
}

