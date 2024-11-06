import Image from "next/image";
import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  border: none;
  width: 34rem;
  height: 1.875rem;
  outline: none;
  border-radius: 1.563rem;
`;

export const IconSearch = styled(Image)`
  width: 2rem;
  height: 2rem;
`;

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgrounds.primary};
  max-width: 109%;
  height: 4.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.25rem;
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export const Icons = styled.div`
  background-color: yellow;
  cursor: pointer;
`;
