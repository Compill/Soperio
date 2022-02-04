import { SoperioComponent } from "@soperio/core";
import { ColorTheme } from "@soperio/theming";
import { CustomComponentConfigFn, SoperioComponentConfig } from "../ComponentConfig";
import { CheckedDisabledThemeProps, CheckedThemeProps, DisabledThemeProps } from "../ComponentStates";
import { HTMLInputProps } from "../HTMLTagProps";

// CheckedThemeProps, DisabledThemeProps checked and disabled are already in HTMLInputProps
export interface CheckboxProps extends SoperioComponent, HTMLInputProps
{
  label?: string,
  otherNameThanSize?: "md" | "lg",
  variant?: string,
  shape?: "rounded" | "circle" | "square",
  theme?: string | ColorTheme;
  config?: CustomComponentConfigFn<CheckboxConfig>;
}

export interface CheckboxThemeProps extends SoperioComponent, CheckedThemeProps, DisabledThemeProps, CheckedDisabledThemeProps
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
