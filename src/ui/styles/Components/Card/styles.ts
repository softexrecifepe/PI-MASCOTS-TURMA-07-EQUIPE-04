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
`;

export const AnimalImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
