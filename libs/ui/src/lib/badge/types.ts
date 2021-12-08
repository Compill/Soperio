import { ColorTheme, ParentComponent, SoperioComponent } from "@soperio/core";

export interface BadgeProps extends SoperioComponent, ParentComponent
{
    variant?: string,
    theme?: string | ColorTheme,
    shape?: "rounded" | "pill" | "square",
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "x2",
}

export interface BadgeConfig
{
    variant?: Record<string, SoperioComponent>,
    shape?: Record<string, SoperioComponent>,
    size?: Record<string, SoperioComponent>,
}
