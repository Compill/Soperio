import { ColorTheme, SoperioComponent } from "@soperio/core";
import { HTMLDivProps } from "../HTMLTagProps";

export interface CardProps extends SoperioComponent, HTMLDivProps
{
    theme?: string | ColorTheme;
    variant?: "default" | "bordered",
    corners?: "default" | "square" | "pill"
}

export interface CardConfig
{
    variant?: Record<string, SoperioComponent>,
    corners?: Record<string, SoperioComponent>,
}
