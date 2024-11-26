import styled from "styled-components";

export const Container = styled.div``;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
    /* Limita o tamanho total e centraliza */
    max-width: 900px; /* Altere conforme necessário */
    margin: 0 auto;
`

export const Lista = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.5rem 1.5rem;
    background-color: ${({ theme }) => theme.colors.backgrounds.sextinary};
    border: 0.0625rem solid ${({ theme }) => theme.colors.border.colors.primary};
    border-radius: 1.25rem;
    gap: 5rem;
    box-shadow: 0px 4px 20px 0px
    rgba(${({ theme }) => theme.colors.backgrounds.sextinary}, 0.2);

    max-width: auto; /* Altere o valor conforme necessário */
    margin: 0 auto;
`;

export const LeftContent = styled.div`
    flex: 1; /* Ocupa espaço proporcionalmente */
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
        color: ${({ theme }) => theme.colors.text.primary};
        font-weight: 400;
        font-size: ${({ theme }) => theme.sizes.font.primary};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    
    span {
        font-weight: 400;
        color: ${({ theme }) => theme.colors.text.quaternary};
    }
`;
export const RightContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: right; /* Alinha o texto à direita */

    p {
        color: ${({ theme }) => theme.colors.text.primary};
        font-weight: 400;
        font-size: ${({ theme }) => theme.sizes.font.primary};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    span {
        font-weight: 400;
        color: ${({ theme }) => theme.colors.text.quaternary};
    }
`;

export const SecundaryButton = styled.div`
    
`

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
