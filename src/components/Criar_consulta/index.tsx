import React, { useEffect, useState } from "react";
import { Alert, Container, Form, FormGroup, Heading, Input, Label, Select } from "@/ui/styles/Components/Criar_consulta/styles";
import { SecondaryButtonStyle } from "@/ui/styles/Components/Elements/Buttons/styles";

type Vetconsultation = {
    tutorName: string;
    animalName: string;
    animalAge: number;
    consultation: string;
    priority: string;
};

export function Vetconsultation() {
    const [formData, setFormData] = useState<Vetconsultation>({
        tutorName: "",
        animalName: "",
        animalAge: 0,
        consultation: "checkup",
        priority: "low",
    });
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [isError, setError] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validação para garantir que todos os campos sejam preenchidos corretamente
        if (!formData.tutorName || !formData.animalName || formData.animalAge <= 0) {
            setAlertMessage("Todos os campos devem ser preenchidos corretamente!");
            setError(true);
            setTimeout(() => setAlertMessage(null), 3000);
            return;
        }

        try {
            // Recupera os dados existentes no localStorage ou cria um array vazio
            const existingData = localStorage.getItem("vetConsultations");
            const consultations = existingData ? JSON.parse(existingData) : [];

            // Adiciona a nova consulta
            consultations.push(formData);

            // Salva no localStorage
            localStorage.setItem("vetConsultations", JSON.stringify(consultations));

            setAlertMessage("Consulta salva com sucesso!");
            setError(false);

            // Limpa o formulário
            setFormData({
                tutorName: "",
                animalName: "",
                animalAge: 0,
                consultation: "checkup",
                priority: "low",
            });

            // Limpa o alerta após 3 segundos
            setTimeout(() => setAlertMessage(null), 3000);
        } catch (error) {
            console.error("Erro ao salvar consulta no localStorage:", error);
            setAlertMessage("Erro ao salvar consulta.");
            setError(true);
        }
    };

    // Exibe as consultas diretamente no console ao carregar o componente
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
            <Form onSubmit={handleSubmit}>
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
                        <option value="checkup">Check-up</option>
                        <option value="vaccination">Vacinação</option>
                        <option value="surgery">Cirurgia</option>
                        <option value="routine">Rotina</option>
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
                        <option value="low">Baixa</option>
                        <option value="medium">Média</option>
                        <option value="high">Alta</option>
                    </Select>
                </FormGroup>
                <SecondaryButtonStyle type="submit">
                    Agendar Consulta
                </SecondaryButtonStyle>
            </Form>
            {alertMessage && <Alert isError={isError}>{alertMessage}</Alert>}{" "}
            {/* Exibe o alerta com o estilo adequado */}
        </Container>
    );
}
