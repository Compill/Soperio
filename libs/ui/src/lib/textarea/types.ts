import { ComponentTheme, SoperioComponent } from "@soperio/core";
import { HTMLTextAreaProps } from "../HTMLTagProps";

export interface TextAreaThemeProps extends SoperioComponent
{
    disabled?: SoperioComponent,
}

export interface TextAreaConfig
{
    size?: Record<string, TextAreaThemeProps>,
    variant?: Record<string, TextAreaThemeProps>,
    corners?: Record<string, TextAreaThemeProps>,
}

export interface TextAreaProps extends SoperioComponent, HTMLTextAreaProps
{
    size?: "sm" | "md" | "lg" | "xl" | "x2",
    variant?: "default" | "solid" | "underline",
    /**
     * Define the input's border radius. Useless if variant is set to "underline"
     */
    corners?: "default" | "square" | "pill",
    theme?: ComponentTheme,
}
