import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.backgrounds.secondary};
  padding: 2rem;
  gap: 2rem;
`;

export const ImageWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.backgrounds.secondary};
  overflow: hidden;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  background-color: RED;
  width: 100%;
  gap: 1.68rem;
  align-items: center;
`;

export const DateTimeGroup = styled.div`
  display: flex;
  gap: 1rem;
`;
