import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  LoginContainer,
  LeftColumn,
  RightColumn,
  FormContainer,
  FooterText,
  Title,
  Divider,
  Input,
  StyledLink,
  BackgroundImageContainer,
  StyledLink1,
} from "@/ui/styles/Components/entrar/styles";
import logo from "@/ui/assets/images/Logo.svg";
import bgpingo from "@/ui/assets/images/bg-pingo2 2.png";
import { PrimaryButton } from "@/components/Elements/Buttons";
import { sign } from "@/service/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  async function handleSignIn() {
    try {
      await sign(email, password);
      router.push("/"); // Redirecionar para a home após o login
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro ao autenticar:", error.message);
      } else {
        console.error("Erro ao autenticar:", error);
      }
    }
  }

  if (!isMounted) return null;

  return (
    <LoginContainer>
      <LeftColumn>
        <Image alt="logo" src={logo} width={150} height={50} />
        <p>Macosts</p>
        <BackgroundImageContainer>
          <Image alt="gato" src={bgpingo} style={{ objectFit: "cover" }} />
        </BackgroundImageContainer>
      </LeftColumn>
      <RightColumn>
        <Title>Entre na sua conta</Title>
        <FormContainer>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PrimaryButton onClick={handleSignIn}>ENTRAR</PrimaryButton>
        </FormContainer>

        <StyledLink href="#">Esqueceu a senha?</StyledLink>
        <FooterText>
          <p>
            <StyledLink1 href="/register">
              Não possui conta? Registre-se
            </StyledLink1>
          </p>
          <p>
            Ao entrar, você concorda com todos os termos e condições de uso.
          </p>
        </FooterText>
      </RightColumn>
    </LoginContainer>
  );
}
