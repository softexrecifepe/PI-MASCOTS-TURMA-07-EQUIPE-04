import styled from "styled-components";

export const Container = styled.nav<{ $isVisible: boolean }>`
  width: 17rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgrounds.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  gap: 1rem;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateX(0)" : "translateX(-100%)"};
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

export const Itens = styled.div`
  /* background-color: blue; */
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
