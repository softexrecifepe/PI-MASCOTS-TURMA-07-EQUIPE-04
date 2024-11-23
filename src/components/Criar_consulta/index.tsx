import React from "react";


export function Vetconsultation(){
    return(
        <>
        <h2>Criar Consulta</h2>
        <form action="">
            <div>
                <label htmlFor="tutor-name">Nome do tutor: </label>
                <input type="text" id="tutor-name" name="tutorName" placeholder="digite o nome do tutor"/>
            </div>
            <div>
                <label htmlFor="animal-name">Nome do animal:</label>
                <input type="text" id="animal-name" name="animalName" placeholder="digite o nome do animal"/>
            </div>
            <div>
                <label htmlFor="animal-age">Idade (Animal):</label>
                <input type="number" id="animal-age" name="animalAge" placeholder="digite a idade do animal"/>
            </div>
            <div>
                <label htmlFor="consultation">Consulta Desejada:</label>
                <select name="consultation" id="consultation">
                    <option value="checkup">Check-up</option>
                    <option value="vaccination">Vacinação</option>
                    <option value="surgery">Cirurgia</option>
                    <option value="routine">Rotina</option>
                </select>
            </div>
            <div>
                <label htmlFor="priority">Prioridade:</label>
                <select id="priority" name="priority">
                    <option value="low">Baixa</option>
                    <option value="medium">Média</option>
                    <option value="high">Alta</option>
                </select>
            </div>
            <div>
                <label htmlFor="documents">Documentos Complementares:</label>
                <input type="file" id="documents" name="documents" multiple />
            </div>
            <div>
                <button type="submit">Agendar Consulta</button>
            </div>
        </form>
        </>
    );
}