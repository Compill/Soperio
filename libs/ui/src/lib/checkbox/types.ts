import { ColorTheme, SoperioComponent } from "@soperio/core";
import { CustomComponentConfigFn, SoperioComponentConfig } from "../ComponentConfig";
import { HTMLInputProps } from "../HTMLTagProps";

export interface CheckboxProps extends SoperioComponent, HTMLInputProps
{
  label?: string,
  otherNameThanSize?: "md" | "lg",
  variant?: string,
  shape?: "rounded" | "circle" | "square",
  theme?: string | ColorTheme;
  config?: CustomComponentConfigFn<CheckboxConfig>;
}

export interface CheckboxThemeProps extends SoperioComponent
{
  checked?: SoperioComponent,
  disabled?: SoperioComponent,
}

export interface CheckboxConfig extends SoperioComponentConfig
{
  otherNameThanSize?: Record<string, CheckboxThemeProps>,
  variant?: Record<string, CheckboxThemeProps>,
  shape?: Record<string, CheckboxThemeProps>,
}
