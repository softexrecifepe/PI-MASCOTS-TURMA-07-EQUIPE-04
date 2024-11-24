import React, {useState} from "react";
import { Header } from "@/components/Header/index";
import { Vetconsultation } from "@/components/Criar_consulta";
import { Navbar } from "@/components/Navbar";

export default function VetQueries() {

  return (
    <>
      <Header />
        <div className="page-content">
          <h1>Consulta</h1>
          <Vetconsultation />
        </div>
    </>
  );
}
