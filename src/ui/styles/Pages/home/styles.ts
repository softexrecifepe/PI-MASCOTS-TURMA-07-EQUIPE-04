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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &::button {
    margin-top: 10rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
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
