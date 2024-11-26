import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  padding-top: 5rem;
  background-color: ${({ theme }) => theme.colors.backgrounds.quinary};
  color: ${({ theme }) => theme.colors.text.primary};
`;
