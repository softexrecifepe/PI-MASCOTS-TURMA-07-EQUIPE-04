import styled from "styled-components";

export const Title = styled.h2`
    display: flex;
    font-size: ${({ theme }) => theme.sizes.font.terciary};
    color: ${({ theme }) => theme.colors.text.primary};
    align-content: center;
    justify-content: center;
    height: 100%;
    gap: 1.625rem;
    padding: 1.625rem 0;
`

export const MainContent = styled.main`
    /* margin-top: 1rem; /* Espaço para compensar Header */
    /* padding: 0 1rem; */ 
    gap: 1.625rem;
    padding: 1.625rem 0;
`;