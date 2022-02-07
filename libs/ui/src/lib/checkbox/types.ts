import { SoperioComponent } from "@soperio/core";
import { ColorTheme } from "@soperio/theming";
import { ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";
import { CheckedDisabledState, CheckedDisabledThemeProps, CheckedState, CheckedThemeProps, DisabledState, DisabledThemeProps } from "../ComponentStates";
import { HTMLInputProps } from "../HTMLTagProps";

// CheckedThemeProps, DisabledThemeProps checked and disabled are already in HTMLInputProps
export interface CheckboxProps extends SoperioComponent, CheckedState, DisabledState, CheckedDisabledState, Omit<HTMLInputProps, "disabled">
{
  label?: string,
  otherNameThanSize?: "md" | "lg",
  variant?: string,
  shape?: "rounded" | "circle" | "square",
  theme?: string | ColorTheme;
  config?: ExtendComponentConfig<CheckboxThemeProps, CheckboxConfig>;
}

export interface CheckboxThemeProps extends SoperioComponent, CheckedThemeProps, DisabledThemeProps, CheckedDisabledThemeProps
{
  checked?: SoperioComponent,
  disabled?: SoperioComponent,
}

export interface CheckboxConfig extends ComponentConfig<CheckboxThemeProps>
{
  otherNameThanSize?: Record<string, CheckboxThemeProps>,
  variant?: Record<string, CheckboxThemeProps>,
  shape?: Record<string, CheckboxThemeProps>,
}
