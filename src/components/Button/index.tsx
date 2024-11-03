import React from "react";
import { PrimaryButton } from "@/ui/styles/Components/Button/styles"


interface ButtonProps {
    text: string;
};
export function Button({text}:ButtonProps) {
    return (
        <PrimaryButton>{text}</PrimaryButton >
    )
}
