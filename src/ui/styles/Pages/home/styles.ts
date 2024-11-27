import styled from "styled-components";

// Container principal da página
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding-top: 5rem;
  background-color: ${({ theme }) => theme.colors.backgrounds.quinary};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ButtonContainer = styled.div<{ navBarVisible?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  div {
    transition: 0.3s;
    display: flex;
    gap: 1rem;
    align-self: flex-end;
    margin-right: ${({ navBarVisible }) =>
      navBarVisible ? "8.5rem" : "17rem"};
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const GroupCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 0 8rem;
`;
