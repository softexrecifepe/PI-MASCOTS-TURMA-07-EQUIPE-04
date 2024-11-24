import styled from "styled-components";

export const Container = styled.div`
    width: 66.8125rem;
    height: 22.8125rem;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=> theme.colors.backgrounds.sextinary};
    border-radius: 1.25rem;
    padding: 2rem;
    gap: 2rem;
    box-shadow: 0px 4px 20px 0px rgba(${({ theme }) => theme.colors.backgrounds.sextinary}, 0.2);
`

export const Heading = styled.h2`
    text-align: center;
    align-items: center;
    background-color: red;

`

export const Form = styled.form`

`

export const Label = styled.label`

`

export const Input = styled.input`

`
export const Select = styled.select`

`

export const Button = styled.button`

`