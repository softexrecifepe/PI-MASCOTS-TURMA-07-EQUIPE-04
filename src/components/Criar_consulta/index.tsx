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
    const [alertMessage, setAlertMessage] = useState<string | null>(null); // Novo estado para alerta
    const [isError, setError] = useState<boolean>(false);

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
    
        // Validação para garantir que todos os campos sejam preenchidos
        if (
            !formData.tutorName ||
            !formData.animalName ||
            !formData.animalAge ||
            formData.animalAge <= 0
        ) {
            setAlertMessage("Todos os campos devem ser preenchidos corretamente!");
            setError(true); // Marca o alerta como erro
            setTimeout(()=> {
                setAlertMessage(null);
            }, 3000);
            return; // Impede o envio do formulário
    
        }
    
        try {
            // Recupera o valor atual do cookie, se houver
            const existingData = getCookie("vetConsultations");
            let consultations = existingData ? JSON.parse(existingData) : [];
    
            // Adiciona os dados atuais ao array de consultas
            consultations.push(formData);
    
            // Salva o array de consultas no cookie (convertido para string)
            setCookie("vetConsultations", JSON.stringify(consultations), 7);
    
            // Atualiza o estado para exibir o alerta de sucesso
            setAlertMessage("Consulta salva com sucesso!");
            setError(false); // Marca o alerta como sucesso
    
            // Limpa o formulário
            setFormData({
                tutorName: "",
                animalName: "",
                animalAge: 0,
                consultation: "checkup",
                priority: "low",
            });
    
            // Limpa o alerta após 3 segundos
            setTimeout(() => {
                setAlertMessage(null);
            }, 3000); // O alerta será limpo após 3 segundos
        } catch (error) {
            console.error("Erro ao salvar consulta nos Cookies: ", error);
            setAlertMessage("Erro ao salvar consulta.");
            setError(true); // Marca o alerta como erro
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
        <Container>
            <Heading>Criar Consulta</Heading>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="tutor-name">Nome do tutor: </Label>
                    <Input type="text" id="tutor-name" name="tutorName" value={formData.tutorName} onChange={handleChange} placeholder="digite o nome do tutor"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="animal-name">Nome do animal:</Label>
                    <Input type="text" id="animal-name" name="animalName" value={formData.animalName} onChange={handleChange} placeholder="digite o nome do animal"/>
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
                <SecondaryButtonStyle type="submit">Agendar Consulta</SecondaryButtonStyle>
            </Form>
            {alertMessage && <Alert isError={isError}>{alertMessage}</Alert>} {/* Exibe o alerta com o estilo adequado */}
        </Container>
    );
}
