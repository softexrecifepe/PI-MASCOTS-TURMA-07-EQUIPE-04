import React from "react";
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
import { Button } from "@/components/Elements/Buttons";
import logo from "@/ui/assets/images/Logo.svg";
import bgpingo from "@/ui/assets/images/bg-pingo2 2.png";

export default function Login() {
  return (
    <LoginContainer>
      <LeftColumn>
        <Image alt="logo" src={logo} />
        <p>
          Descrição Descrição Descrição Descrição Descrição Descrição Descrição
          Descrição
        </p>
        <BackgroundImageContainer>
          <Image alt="gato" src={bgpingo} />
        </BackgroundImageContainer>
      </LeftColumn>
      <RightColumn>
        <FormContainer>
          <Title>Entre na sua conta</Title>
          <Divider>OU</Divider>
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" />
          <StyledLink href="#">Esqueceu a senha?</StyledLink>
          {/* <Button
            text="ENTRAR"
            variant="primary"
            onClick={() => console.log("teste")}
          /> */}
          <StyledLink1 href="#">Não possui conta? Registre-se</StyledLink1>
          <FooterText>
            Ao entrar, você concorda com todos os termos e condições de uso.
          </FooterText>
        </FormContainer>
      </RightColumn>
    </LoginContainer>
  );
}
