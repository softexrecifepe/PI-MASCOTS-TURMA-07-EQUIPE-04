import styled from "styled-components";
import Image from "next/image";

// Container principal para a página de login
export const LoginContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.backgrounds.quaternary};
`;

// Coluna esquerda com o logo e a descrição
export const LeftColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5.438rem;
    text-align: center;

    p {
        font-size: ${({theme}) => theme.sizes.font.primary};
        color: ${({theme}) => theme.colors.text.primary};
        width: 402px;
        height: 45px;
        margin-top: 0.938rem;
    }
`;

export const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%; 
    object-fit: cover; 
    object-position: center;  
`;

// Coluna direita com o formulário de login
export const RightColumn = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e0e0e0;
    border-radius: 10.625rem 0 0 9.375rem;
`;

// Container do formulário para estilizar a área de login
export const FormContainer = styled.div`
    text-align: center;
`;

// Título no topo do formulário
export const Title = styled.h2`
    font-size: ${({theme}) => theme.sizes.font.quaternary};
    color: ${({theme}) => theme.colors.text.primary};
    font-family: "Creepy", sans-serif; /* Fonte personalizada para combinar com a imagem */
`;

// Divisor para o texto "OU"
export const Divider = styled.div`
    margin: 20px 0;
    color: #666;
    font-size: 18px;
    font-weight: bold;
`;

// Campos de entrada (input)
export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
`;

// Links estilizados
export const StyledLink = styled.a`
    color: #666;
    font-size: 14px;
    margin-top: 10px;
    display: block;
    text-decoration: none;
    &:hover {
        color: #333;
        text-decoration: underline;
    }
`;

// Texto no rodapé
export const FooterText = styled.p`
    font-size: 12px;
    color: #999;
    margin-top: 20px;
`;
