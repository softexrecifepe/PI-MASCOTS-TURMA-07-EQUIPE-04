import React from "react";
import { useRouter } from "next/router";
import { Container } from "@/ui/styles/Pages/404/styles";
import { PrimaryButtonStyle } from "@/ui/styles/Components/Elements/Buttons/styles";

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
          <PrimaryButtonStyle onClick={() => router.push("/")}>
            Ir para página inicial
          </PrimaryButtonStyle>
        </div>
      </div>
    </Container>
  );
}
