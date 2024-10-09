import styled from "styled-components";

export const Container = styled.div`
  /* exemplos: */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgrounds.secondary};
  color: ${({ theme }) => theme.colors.text.primary};
`;
