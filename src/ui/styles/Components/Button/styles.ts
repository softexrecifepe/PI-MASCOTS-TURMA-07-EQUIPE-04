import styled from "styled-components";

export const PrimaryButton = styled.button`
    width: 27.75rem;
    height: 2.813rem;
    border: none;
    background-color: ${({theme}) => theme.colors.backgrounds.primary};
    border-radius: 0.5rem;
    color: ${({theme}) => theme.colors.text.secondary};
    text-align: center;
    cursor: pointer;
`;

export const SecondaryButton = styled.button`
    display: flex;
    width: 9.4444rem;
    height: 1.5625rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.backgrounds.secondary};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    padding: .4169rem;
    text-align: center;
    justify-content: center;
    cursor: pointer;
`;

