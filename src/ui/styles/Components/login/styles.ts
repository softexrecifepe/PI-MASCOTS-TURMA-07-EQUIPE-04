import styled from "styled-components";
import Image from "next/image";


export const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.backgrounds.quaternary};
`;


export const LeftColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5.438rem; 
    text-align: center;

    p {
        font-size: ${({theme}) => theme.sizes.font.primary}; 
        color: ${({theme}) => theme.colors.text.primary};
        width: 25.75rem; 
        height: 2.81rem; 
        margin-top: 0.938rem; 
    }
`;

export const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%; 
    object-fit: cover; 
    object-position: center;  
`;


export const RightColumn = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.backgrounds.sextinary};
    border-radius: 10.625rem 0 0 9.375rem; 
`;

export const FormContainer = styled.div`
    text-align: center;
`;

export const Title = styled.h2`
    font-size: ${({theme}) => theme.sizes.font.quaternary}; 
    color: ${({theme}) => theme.colors.text.primary};
    font-family: "Kablammo", sans-serif; 
`;

export const Divider = styled.div`
    color: ${({theme}) => theme.colors.text.primary};
    font-size: ${({theme}) => theme.sizes.font.quaternary}; 
    font-weight: 400;
    padding-top: 6.25rem; 
    padding-bottom: 2.8125rem;
`;


export const Input = styled.input`
    display: flex;
    width: 27.75rem; 
    height: 2.44rem; 
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.colors.border.colors.tertiary};
    font-size: 0.75rem; 
    background-color: ${({theme}) => theme.colors.backgrounds.sextinary};
    color: #00000080;
    outline: none; 
`;


export const StyledLink = styled.a`
    color: #00000080;
    font-size: 0.6875rem;
    text-align: end;
    margin-top: 0;
    display: block;
    text-decoration: none;
    padding-bottom: 3.625rem; 
    &:hover {
        color: #333;
        text-decoration: underline;
    }
`;

export const StyledLink1 = styled.a`
    color: ${({theme}) => theme.colors.text.primary};
    font-size: 0.6875rem; 
    text-align: center;
    margin-top: 1.8125rem; 
    display: block;
    text-decoration: none;
    padding-top: 1.8125rem; 
    &:hover {
        color: #333;
        text-decoration: underline;
    }
`;


export const FooterText = styled.p`
    display: flex;
    font-family: "Magra", sans-serif;
    font-size: 0.6875rem; 
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({theme}) => theme.colors.text.primary};
    text-align: center;
    padding-top: 0.3125rem; 
`;

