import React, { useState } from "react";
import { db, collection, addDoc } from "@/services/firebaseConfig";

type Vetconsultation = {
    tutorName: string;
    animalName: string;
    animalAge: number;
    consultation: string;
    priority: string;
};



export function Vetconsultation(){

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
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          // Envia os dados para o Firestore
            const docRef = await addDoc(collection(db, "consultations"), {
                tutorName: formData.tutorName,
                animalName: formData.animalName,
                animalAge: formData.animalAge,
                consultation: formData.consultation,
                priority: formData.priority,
            });
            alert("Consulta agendada com sucesso!");
        } catch (e) {
            console.error("Erro ao adicionar consulta: ", e);
            alert("Erro ao agendar consulta.");
            }
        };
    
    return(
        <>
        <h2>Criar Consulta</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="tutor-name">Nome do tutor: </label>
                <input type="text" id="tutor-name" name="tutorName" value={formData.tutorName} onChange={handleChange} placeholder="digite o nome do tutor"/>
            </div>
            <div>
                <label htmlFor="animal-name">Nome do animal:</label>
                <input type="text" id="animal-name" name="animalName" value={formData.animalName} onChange={handleChange}placeholder="digite o nome do animal"/>
            </div>
            <div>
                <label htmlFor="animal-age">Idade (Animal):</label>
                <input type="number" id="animal-age" name="animalAge" value={formData.animalAge} onChange={handleChange} placeholder="digite a idade do animal"/>
            </div>
            <div>
                <label htmlFor="consultation">Consulta Desejada:</label>
                <select name="consultation" id="consultation" value={formData.consultation} onChange={handleChange}>
                    <option value="checkup">Check-up</option>
                    <option value="vaccination">Vacinação</option>
                    <option value="surgery">Cirurgia</option>
                    <option value="routine">Rotina</option>
                </select>
            </div>
            <div>
                <label htmlFor="priority">Prioridade:</label>
                <select id="priority" name="priority" value={formData.priority} onChange={handleChange}>
                    <option value="low">Baixa</option>
                    <option value="medium">Média</option>
                    <option value="high">Alta</option>
                </select>
            </div>
            {/* <div>
                <label htmlFor="documents">Documentos Complementares:</label>
                <input type="file" id="documents" name="documents" multiple  value={formData.documents} onChange={handleChange}/>
            </div> */}
            <div>
                <button type="submit">Agendar Consulta</button>
            </div>
        </form>
        </>
    );
}