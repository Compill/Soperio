import { ColorTheme, SoperioComponent } from "@soperio/core";
import { HTMLInputProps } from "../HTMLTagProps";

export interface RadioProps extends SoperioComponent, HTMLInputProps
{
    label?: string,
    otherNameThanSize?: "md" | "lg",
    variant?: string,
    theme?: string | ColorTheme;
    dotSize?: "sm" | "md" | "lg"
}

export interface RadioThemeProps extends SoperioComponent
{
    checked?: SoperioComponent,
    disabled?: SoperioComponent,
}

export interface RadioConfig
{
    otherNameThanSize?: Record<string, RadioThemeProps>,
    variant?: Record<string, RadioThemeProps>,
}
