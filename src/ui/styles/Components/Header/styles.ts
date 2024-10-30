import Image from "next/image";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    border: 2px solid #442150; 
    background-color: #442150;
    flex-shrink: 0;
    height: 76px;
    display: flex;
    justify-content: space-between; /* Alinhamento horizontal */
    align-items: center;           /* Alinhamento vertical */
    padding: 0 2rem;               /* Espaço nas bordas */
`;

export const Searchbar = styled.div`
    display: flex;
    border-radius: 25px;
    border: 1px solid var(--Color-1, #44215D);
    background: #D9D9D9;
    padding: 0.5rem 1rem;          /* Espaço interno na barra de pesquisa */
`;

export const Imagestyle = styled(Image)`
    margin-left: 6rem;
`;
