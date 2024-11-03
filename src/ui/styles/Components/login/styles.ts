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
    background-color: ${({theme}) => theme.colors.backgrounds.sextinary};
    border-radius: 10.625rem 0 0 9.375rem;
`;

export const FormContainer = styled.div`
    text-align: center;
`;


export const Title = styled.h2`
    font-size: ${({theme}) => theme.sizes.font.quaternary};
    color: ${({theme}) => theme.colors.text.primary};
    font-family: "Kablammo", sans-serif; /* Fonte personalizada para combinar com a imagem */
`;

export const Divider = styled.div`
    color: ${({theme}) => theme.colors.text.primary};
    font-size: ${({theme}) => theme.sizes.font.quaternary};
    font-weight: 400;
    margin-top: 145px;
    margin-bottom: 45px;
`;

// Campos de entrada (input)
export const Input = styled.input`
    display: flex;
    width: 444px;
    height: 39px;
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.colors.border.colors.tertiary};;
    font-size: 12px;
    background-color: ${({theme}) => theme.colors.backgrounds.sextinary};
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
    font-family: "Magra", sans-serif;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({theme}) => theme.colors.text.primary};
    text-align: center;
`;
