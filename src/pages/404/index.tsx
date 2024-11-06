import React from "react";
import { useRouter } from "next/router";
import { Container } from "@/ui/styles/Pages/404/styles";

export default function Custom404() {
  const router = useRouter();

  return (
    <Container>
      <div>
        <div>
          <span onClick={() => router.push("/")} />
        </div>

        <div>
          <h1>404</h1>
          <p>Esta página não foi encontrada</p>
          <button onClick={() => router.push("/")}>
            Ir para página inicial
          </button>
        </div>
      </div>
    </Container>
  );
}
