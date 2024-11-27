import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
        color: #333;
    }
    
    button {
        cursor: pointer;

        :disabled {
            cursor: not-allowed;
        }
    }

    /* add custom scrollbar in global project 👇🏼👇🏼👻 */
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.backgrounds.primary};
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(100deg, 
        ${(props) => props.theme.colors.backgrounds.primary}
        20%, 
        ${(props) => props.theme.colors.backgrounds.quaternary}
        50%, 
        ${(props) => props.theme.colors.backgrounds.primary} 
        100%);
      border-radius: 20px;
    }

    /* Text selected color 👇🏼👇🏼👻 */
    ::-moz-selection {
      color: ${(props) => props.theme.colors.backgrounds.quaternary};
      background: ${(props) => props.theme.colors.backgrounds.primary};
    }
    ::selection {
      color: ${(props) => props.theme.colors.backgrounds.quaternary};
      background: ${(props) => props.theme.colors.backgrounds.primary};
    }
`;

export default GlobalStyles;
