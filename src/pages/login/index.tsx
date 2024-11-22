import React, { useState } from "react";
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
} from "@/ui/styles/Components/login/styles";
import logo from "@/ui/assets/images/Logo.svg";
import bgpingo from "@/ui/assets/images/bg-pingo2 2.png";
import { auth } from "@/services/firebaseConfig";
import { PrimaryButton } from "@/components/Elements/Buttons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn() {
    signInWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (user) {
    return console.log(user);
  }

  return (
    <LoginContainer>
      <LeftColumn>
        <Image alt="logo" src={logo} />
        <p>Macosts</p>
        <BackgroundImageContainer>
          <Image alt="gato" src={bgpingo} />
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
