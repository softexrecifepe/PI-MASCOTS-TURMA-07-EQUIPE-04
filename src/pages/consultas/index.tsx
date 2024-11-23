import { Header } from "@/components/Header/index";
import { Vetconsultation } from "@/components/Criar_consulta";
import React from "react";
import { Navbar } from "@/components/Navbar";

export default function VetQueries() {
  return (
    <div>
      <Header>
      </Header>
        <h1>Consultas</h1>
      <Vetconsultation></Vetconsultation>
  
    </div>
  );
}
