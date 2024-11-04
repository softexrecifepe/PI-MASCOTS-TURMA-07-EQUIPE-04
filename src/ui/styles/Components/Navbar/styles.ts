import styled from "styled-components";

export const Container = styled.nav<{ isVisible: boolean }>`
  width: 17rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgrounds.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  gap: 2rem;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(-100%)"};
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

export const Itens = styled.div`
  background-color: blue;
  width: 100%;
  display: flex;
  justify-content: center;
`;
