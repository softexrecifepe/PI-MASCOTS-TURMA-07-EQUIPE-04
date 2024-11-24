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
    box-shadow: 0px 4px 20px 0px rgba(${({ theme }) => theme.colors.backgrounds.sextinary}, 0.2);
`;

export const Heading = styled.h2`
    text-align: center;
    align-items: center;

`

export const Form = styled.form`
    width: 100%;
    max-width: 40rem;
    height: auto;
    border: 1px solid ${({theme}) => theme.colors.border.colors.primary};
    background-color: ${({theme})=> theme.colors.backgrounds.quinary};
    border-radius: 1.25rem;
    padding: 2rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: normal;

`
export const FormGroup = styled.div`
    display: flex;
    flex-direction: row; /* Define os itens na horizontal */
    align-items: center; /* Alinha os itens verticalmente */
    gap: 1rem; /* Espaço entre o label e o input */
    margin-bottom: 1rem; /* Espaço entre os grupos */
`;



export const Label = styled.label`
    color: ${({theme}) => theme.colors.text.sextinary};
    font-weight: 400;
    font-size: ${({theme}) => theme.sizes.font.primary};

`

export const Input = styled.input`
    width: 100%;
    color: ${({theme}) => theme.colors.text.sextinary};
    font-weight: 400;
    font-size: ${({theme}) => theme.sizes.font.primary};
    padding: 0.75rem 1rem; /* Espaçamento interno */
    background-color: ${({ theme }) => theme.colors.backgrounds.quinary};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.colors.tertiary}; /* Define a borda */
    border-radius: none; /* Borda arredondada */
    outline: none; /* Remove o contorno padrão */
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-bottom-color: ${({ theme }) => theme.colors.border.colors.tertiary}; /* Cor ao focar no campo */
        box-shadow: 0 0 5px ${({ theme }) => theme.colors.border.colors.tertiary}; /* Sombra ao focar */
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.text.sextinary}; /* Cor do placeholder */
    }
`;

export const Select = styled.select`
    width: 100%;
    color: ${({theme}) => theme.colors.text.sextinary};
    font-weight: 400;
    font-size: ${({theme}) => theme.sizes.font.primary};
    padding: 0.75rem 1rem; /* Espaçamento interno */
    background-color: ${({ theme }) => theme.colors.backgrounds.quinary};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.colors.tertiary}; /* Define a borda */
    border-radius: none; /* Borda arredondada */
    outline: none; /* Remove o contorno padrão */
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-bottom-color: ${({ theme }) => theme.colors.border.colors.tertiary}; /* Cor ao focar no campo */
        box-shadow: 0 0 5px ${({ theme }) => theme.colors.border.colors.tertiary}; /* Sombra ao focar */
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.text.sextinary}; /* Cor do placeholder */
    }
`;

export const SecondaryButtonStyle = styled.button`
    /* text-transform: uppercase; */
`