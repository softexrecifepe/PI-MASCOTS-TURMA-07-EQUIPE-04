import styled from "styled-components";

export const PrimaryButtonStyle = styled.button`
  width: 27.75rem;
  height: 2.813rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.backgrounds.primary};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  cursor: pointer;
`;

export const SecondaryButtonStyle = styled.button`
  display: flex;
  width: fit-content;
  margin: 1rem auto;
  height: 2.5rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.backgrounds.secondary};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: 1rem;
  font-weight: 400;
  font-size: ${({theme}) => theme.sizes.font.primary};
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;

`;
