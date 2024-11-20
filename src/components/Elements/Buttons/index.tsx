import React from "react";
import {
  PrimaryButtonStyle,
  SecondaryButtonStyle,
} from "@/ui/styles/Components/Button/styles";

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

export function PrimaryButton({ children, onClick }: ButtonProps) {
  return <PrimaryButtonStyle onClick={onClick}>{children}</PrimaryButtonStyle>;
}

export function SecundaryButton({ children, onClick }: ButtonProps) {
  return (
    <SecondaryButtonStyle onClick={onClick}>{children}</SecondaryButtonStyle>
  );
}
