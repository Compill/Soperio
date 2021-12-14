import { ColorTheme, SoperioComponent } from "@soperio/core";
import { CustomComponentConfigFn, SoperioComponentConfig } from "../ComponentConfig";
import { HTMLInputProps } from "../HTMLTagProps";

export interface RadioProps extends SoperioComponent, HTMLInputProps
{
  label?: string,
  otherNameThanSize?: "md" | "lg",
  variant?: string,
  theme?: string | ColorTheme;
  dotSize?: "sm" | "md" | "lg";
  config?: CustomComponentConfigFn<RadioConfig>;
}

export interface RadioThemeProps extends SoperioComponent
{
  checked?: SoperioComponent,
  disabled?: SoperioComponent,
}

export interface RadioConfig extends SoperioComponentConfig
{
  otherNameThanSize?: Record<string, RadioThemeProps>,
  variant?: Record<string, RadioThemeProps>,
}
