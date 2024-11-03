import React from "react";
import { PrimaryButton, SecondaryButton } from "@/ui/styles/Components/Button/styles"


interface ButtonProps {
    text: string;
    variant?: "primary" | "secondary";
    onClick?: () => void;
};
export function Button({ text, variant = "primary", onClick }: ButtonProps) {
    return (
        <>
            {variant === "primary" ? (
                <PrimaryButton onClick={onClick}>{text}</PrimaryButton>
            ) : (
                <SecondaryButton onClick={onClick}>{text}</SecondaryButton>
            )}
        </>
    );
};
