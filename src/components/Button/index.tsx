import React from "react";
import { PrimaryButton, SecondaryButton } from "@/ui/styles/Components/Button/styles"


interface ButtonProps {
    text: string
    onClick?: () => void;
};
export function Button({ text, onClick }: ButtonProps) {
    return (
        <>
            <PrimaryButton onClick={onClick}>{text}</PrimaryButton>
            <SecondaryButton onClick={onClick}>{text}</SecondaryButton>
        </>
    );
};
