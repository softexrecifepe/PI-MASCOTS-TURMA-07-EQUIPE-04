import React, { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Image from "next/image";
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
import { auth } from "@/service/firebaseConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handleSignIn() {
    signInWithEmailAndPassword(email, password);
  }

  if (!isMounted) return null;

  if (loading) return <p>Carregando...</p>;

  if (error) return <p>Erro ao entrar: {error.message}</p>;

  if (user) {
    console.log(user);
    return <p>Bem-vindo, {user.user.displayName}!</p>;
  }

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
        <Divider>OU</Divider>
        <FormContainer>
          <Input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledLink href="#">Esqueceu a senha?</StyledLink>
          <PrimaryButton onClick={handleSignIn}>ENTRAR</PrimaryButton>
        </FormContainer>
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
