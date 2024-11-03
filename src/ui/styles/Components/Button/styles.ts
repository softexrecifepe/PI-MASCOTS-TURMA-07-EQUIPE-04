import styled from "styled-components";

export const PrimaryButton = styled.button`
    width: 27.75rem;
    height: 2.813rem;
    border: none;
    background-color: ${({theme}) => theme.colors.backgrounds.primary};
    border-radius: 0.5rem;
    color: ${({theme}) => theme.colors.text.secondary};
    text-align: center;
`;

