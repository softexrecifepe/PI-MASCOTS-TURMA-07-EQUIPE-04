import { hexToRgba } from "@/utils/functions/hexToRgba";
import styled from "styled-components";

export const Container = styled.nav<{ $isVisible: boolean }>`
  width: 17rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgrounds.primary};
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  /* padding-left: calc((17rem - 80%) / 2); */
  padding-left: 1.5rem;
  gap: 1rem;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateX(0)" : "translateX(-100%)"};
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

export const Itens = styled.div`
  max-width: 90%;
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  gap: 0.6rem;
  padding-left: 1.3rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 15px;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) =>
      hexToRgba(theme.colors.backgrounds.sextinary, 0.5)};
  }
`;
