"use client"

import React from "react"
import { cn } from "@/lib/utils"

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    loading = false,
    className,
    ...props
}) => {
    const base = 
    "border h-12 rounded-full px-6 font-medium transition focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

    const variants: Record<ButtonVariant, string> = {
        primary: "bg-yellow-300 text-neutral-950 border-yellow-300 ",
        secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
        outline: "border-white text-white bg-transparent"
    };

    return (
        <button
        className={cn(base, variants[variant], className)}
        disabled={loading}
        {...props}>
            {loading ? "Loading..." : children}
        </button>
    )
}