import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 66.8125rem;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgrounds.sextinary};
  border-radius: 1.25rem;
  padding: 2rem;
  gap: 2rem;
  box-shadow: 0px 4px 20px 0px
    rgba(${({ theme }) => theme.colors.backgrounds.sextinary}, 0.2);
`;

export const Heading = styled.h2`
  text-align: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 40rem;
  height: auto;
  border: 1px solid ${({ theme }) => theme.colors.border.colors.primary};
  background-color: ${({ theme }) => theme.colors.backgrounds.quinary};
  border-radius: 1.25rem;
  padding: 2rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: normal;
`;
export const FormGroup = styled.div`
  display: flex;
  height: auto;
  flex-direction: row;
  align-items: center;
  gap: 0px;
  width: 100%;
`;

export const Label = styled.label`
  white-space: nowrap;
  flex-shrink: 0;
  width: 9rem;
  color: ${({ theme }) => theme.colors.text.sextinary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.sizes.font.primary};
  margin-right: 0;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 15rem;
  max-width: 25rem;
  font-weight: 400;
  font-size: ${({ theme }) => theme.sizes.font.primary};
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.backgrounds.quinary};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.colors.tertiary};
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  margin-left: 0;

  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.border.colors.tertiary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.border.colors.tertiary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.sextinary};
  }
`;

export const Select = styled.select`
  flex: 1;
  min-width: 15rem;
  max-width: 25rem;
  color: ${({ theme }) => theme.colors.text.sextinary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.sizes.font.primary};
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.backgrounds.quinary};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.colors.tertiary}; /* Define a borda */
  border-radius: none;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-bottom-color: ${({ theme }) =>
      theme.colors.border.colors.tertiary}; /* Cor ao focar no campo */
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.border.colors.tertiary}; /* Sombra ao focar */
  }

  &::placeholder {
    color: ${({ theme }) =>
      theme.colors.text.sextinary}; /* Cor do placeholder */
  }
`;

export const Alert = styled.div<{ isError: boolean }>`
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  border-radius: 0.5rem;
  background-color: ${({ isError, theme }) =>
    isError ? theme.colors.backgrounds.error : "#28a745"};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.sizes.font.primary};
  font-weight: 700;
`;
