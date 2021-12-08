import { ColorTheme, SoperioComponent } from "@soperio/core";
import { HTMLInputProps } from "../HTMLTagProps";

export interface CheckboxProps extends SoperioComponent, HTMLInputProps
{
    label?: string,
    otherNameThanSize?: "md" | "lg",
    variant?: string,
    shape?: "rounded" | "circle" | "square",
    theme?: string | ColorTheme;
}

export interface CheckboxThemeProps extends SoperioComponent
{
    checked?: SoperioComponent,
    disabled?: SoperioComponent,
}

export interface CheckboxConfig
{
    otherNameThanSize?: Record<string, CheckboxThemeProps>,
    variant?: Record<string, CheckboxThemeProps>,
    shape?: Record<string, CheckboxThemeProps>,
}
