import Image from "next/image";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  border: 0.125rem solid #442150;
  background-color: #442150;
  flex-shrink: 0;
  width: 100vw;
  height: 4.75rem; 
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 1.5625rem; 
  margin-left: 33rem;
  margin-right: 32rem;
  width: 34rem; 
  padding: 0 0.625rem; 
`;

export const StyledInput = styled.input`
  border: none;
  border-radius: 1.5625rem; 
  width: 100%;
  height: 1.875rem; 
  padding-left: 0.625rem; 
  outline: none;
`;

export const IconSearch = styled(Image)`
  width: 2rem; 
  height: 2rem; 
  margin-right: 0.5rem; 
`;

export const ImageMenu = styled(Image)`
  margin: 1.75rem 1.75rem 2rem;
`;

export const ImageLogo = styled(Image)`
  margin-left: 1rem;
`;

export const Notification = styled(Image)`
  margin-left: auto;
  margin-right: 2rem;
`;

export const Iconprofile = styled(Image)`
  margin-right: 1.2rem;
`;

