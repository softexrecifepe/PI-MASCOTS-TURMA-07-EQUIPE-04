import React, { useEffect, useState } from "react";
import { Container, Form, FormGroup, Heading, Input, Label, Select } from "@/ui/styles/Components/Criar_consulta/styles";
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const setCookie = (name: string, value: string, days: number) => {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Define o tempo de expiração
        document.cookie = `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/`;
    };

    const getCookie = (name: string): string | null => {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            const [key, value] = cookie.split("=");
            if (key === name) return decodeURIComponent(value);
        }
        return null;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Recupera o valor atual do cookie, se houver
            const existingData = getCookie("vetConsultations");
            let consultations = existingData ? JSON.parse(existingData) : [];

            // Adiciona os dados atuais ao array de consultas
            consultations.push(formData);

            // Salva o array de consultas no cookie (convertido para string)
            setCookie("vetConsultations", JSON.stringify(consultations), 7);

            alert("Consulta salva com sucesso!");

            // Limpa o formulário
            setFormData({
                tutorName: "",
                animalName: "",
                animalAge: 0,
                consultation: "checkup",
                priority: "low",
            });
        } catch (error) {
            console.error("Erro ao salvar consulta nos Cookies: ", error);
            alert("Erro ao salvar consulta.");
        }
    };

    // Exibe as consultas diretamente no console ao carregar o componente
    useEffect(() => {
        const consultations = getCookie("vetConsultations");
        if (consultations) {
            console.log("Consultas Salvas:", JSON.parse(consultations));
        } else {
            console.log("Nenhuma consulta salva.");
        }
    }, []);
    
    return(
        <>
            <Container>
                <Heading>Criar Consulta</Heading>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="tutor-name">Nome do tutor: </Label>
                        <Input type="text" id="tutor-name" name="tutorName" value={formData.tutorName} onChange={handleChange} placeholder="digite o nome do tutor"/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="animal-name">Nome do animal:</Label>
                        <Input type="text" id="animal-name" name="animalName" value={formData.animalName} onChange={handleChange}placeholder="digite o nome do animal"/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="animal-age">Idade (Animal):</Label>
                        <Input type="number" id="animal-age" name="animalAge" value={formData.animalAge} onChange={handleChange} placeholder="digite a idade do animal"/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="consultation">Consulta Desejada:</Label>
                        <Select name="consultation" id="consultation" value={formData.consultation} onChange={handleChange}>
                            <option value="checkup">Check-up</option>
                            <option value="vaccination">Vacinação</option>
                            <option value="surgery">Cirurgia</option>
                            <option value="routine">Rotina</option>
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="priority">Prioridade:</Label>
                        <Select id="priority" name="priority" value={formData.priority} onChange={handleChange}>
                            <option value="low">Baixa</option>
                            <option value="medium">Média</option>
                            <option value="high">Alta</option>
                        </Select>
                    </FormGroup>
                    {/* <div>
                        <Label htmlFor="documents">Documentos Complementares:</Label>
                        <Input type="file" id="documents" name="documents" multiple  value={formData.documents} onChange={handleChange}/>
                    </div> */}
                    <SecondaryButtonStyle type="submit">Agendar Consulta</SecondaryButtonStyle>

                </Form>
            </Container>
        </>
    );
}