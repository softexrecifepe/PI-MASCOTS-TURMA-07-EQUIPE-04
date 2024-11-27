import { PrimaryInputStyle } from "@/ui/styles/Components/Elements/Inputs/styles";
import React from "react";

interface InputProps {
  title: string;
  placeholder: string;
  type: string;
}

export function PrimaryInput({ title, placeholder, type }: InputProps) {
  return (
    <PrimaryInputStyle
      title={title}
      placeholder={placeholder}
      type={type ? type : "text"}
    />
  );
}

export function SecundaryInput({ title, placeholder, type }: InputProps) {
  return (
    <SecundaryInput
      title={title}
      placeholder={placeholder}
      type={type ? type : "text"}
    />
  );
}
