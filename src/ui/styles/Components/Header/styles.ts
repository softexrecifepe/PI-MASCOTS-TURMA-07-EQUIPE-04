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
    align-items: center;
    border-radius: 25px;
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