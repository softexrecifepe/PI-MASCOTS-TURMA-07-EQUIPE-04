import Image from "next/image";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    border: 2px solid #442150; 
    background-color: #442150;
    flex-shrink: 0;
    width: 100vw; /* Largura igual ao viewport */
    height: 76px; /* Altura igual ao viewport */
    display: flex;
    justify-content: flex-start; /* Alinhamento horizontal */
    align-items: center;           /* Alinhamento vertical */
    padding: 0 2rem;               /* Espaço nas bordas */
`;

export const StyledInput = styled.input`
    border-radius: 25px;
    border: 1px solid #44215D;
    background-color: #D9D9D9;
    padding: 0.5rem 1rem;
    margin: 0 1.5rem;
    font-size: 16px;
    width: 100%;
    max-width: 300px; /* Adicionada uma largura máxima */
    outline: none;

    /* Adicionado estilo para o placeholder */
    &::placeholder {
        color: #666;
    }
`;


export const ImageMenu = styled(Image)`
    margin: 1.75rem 1.75rem 2rem;
    /* margin-left: 1rem; */
`;
export const ImageLogo = styled(Image)`
     margin-left: 2rem;
`;

export const Notification = styled(Image)`
    margin-left: auto;
    margin-right: 2rem;
`;

export const Iconprofile = styled(Image)`
    margin-right: 1.2rem;
`;