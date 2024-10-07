// 🔻Esta função converte uma cor hexadecimal em uma cor rgba.
// 🔻O primeiro parâmetro é a cor hexadecimal e o segundo é a opacidade da cor rgba.

// ✅ O seu uso foi necessário para adicionar um efeito de transparência na cor de fundo do ButtonComponent.

export function hexToRgba(hex: string, opacity: number): string {
  let r = 0,
    g = 0,
    b = 0;

  // Convertendo cores hexadecimais de 3 dígitos
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);

    // Convertendo cores hexadecimais de 6 dígitos
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

//! MODO DE USAR:

// import styled from "styled-components";
// import { hexToRgba } from "@/utils/functions/hexToRgba";

// background-color: ${({ theme }) =>
//   hexToRgba(theme.colors.backgrounds.secondary, 0.2)};
