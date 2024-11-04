import styled from "styled-components";

export const Container = styled.nav`
  width: 17rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgrounds.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  gap: 2rem;
`;

export const Itens = styled.div`
  background-color: blue;
  width: 100%;
  display: flex;
  justify-content: center;
`;
