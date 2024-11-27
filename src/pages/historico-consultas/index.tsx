import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header/index";

type Vetconsultation = {
    tutorName: string;
    animalName: string;
    animalAge: number;
    consultation: string;
    priority: string;
    status: string; 
};

export default function HistoryConsultations() {
    const [historicalConsultations, setHistoricalConsultations] = useState<
    Vetconsultation[] | null>(null);

    useEffect(() => {
    const storedData = localStorage.getItem("vetConsultations");
    if (storedData) {
        console.log("Dados no localStorage:", storedData); 
        const allConsultations: Vetconsultation[] = JSON.parse(storedData);
        setHistoricalConsultations(allConsultations);
    } else {
        console.log("Nenhuma consulta encontrada no localStorage.");
    }
    }, []);

    return (
        <div>
            {/* <Hea  er /> */}
            <h1>Histórico de Consultas</h1>
        <div>
        {historicalConsultations && historicalConsultations.length > 0 ? (
            historicalConsultations.map((consultation, index) => (
            <div key={index}>
                <p><strong>Nome do Animal:</strong> {consultation.animalName}</p>
                <p><strong>Nome do Tutor:</strong> {consultation.tutorName}</p>
                <p><strong>Idade:</strong> {consultation.animalAge}</p>
                <p><strong>Tipo:</strong> {consultation.consultation}</p>
                <p><strong>Prioridade:</strong> {consultation.priority}</p>
                <p><strong>Status:</strong>{consultation.status}</p>
            </div>
            ))
        ) : (
            <p>Não há consultas concluídas no histórico.</p>
        )}
        </div>
    </div>
    );
}

