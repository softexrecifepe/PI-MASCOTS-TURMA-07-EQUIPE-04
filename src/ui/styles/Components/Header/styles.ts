import Image from "next/image";
import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  border-radius: 1.5625rem;
  width: 30rem;
  height: 1.875rem;
  outline: none;
  border-radius: 1.5625rem;
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

export const MenuWrappe = styled.div`  
  margin-left: 2.125rem;
  cursor: pointer;
`;

export const Iconprofile = styled(Image)`
  margin-right: 1.188rem;
  cursor: pointer;
`;