import styled from "styled-components";

export const Container = styled.nav<{ $isVisible: boolean }>`
  width: 17rem;
  height: calc(100vh - 4rem); /* Ajuste para considerar a altura do Header */
  background-color: ${({ theme }) => theme.colors.backgrounds.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  gap: 1rem;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateX(0)" : "translateX(-100%)"};
  transition: opacity 0.3s ease, transform 0.3s ease;

  position: fixed; /* Fixado na lateral, abaixo do Header */
  top: 4rem; /* Espaço para o Header */
  left: 0;
  z-index: 1000;

  /* Empurra apenas o conteúdo principal */
  + * {
    margin-left: ${({ $isVisible }) => ($isVisible ? "17rem" : "0")};
    transition: margin-left 0.3s ease;
  }
`;

export const Itens = styled.div`
  width: 80%;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 15px;
  padding: 0.5rem;
  gap: 0.75rem;
  transition: 0.3s;
  cursor: pointer;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgrounds.sextinary};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;


