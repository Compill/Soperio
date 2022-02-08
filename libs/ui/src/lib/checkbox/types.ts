import { ComponentTheme, SoperioComponent } from "@soperio/core";
import { ColorTheme } from "@soperio/theming";
import { ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";
import { CheckedDisabledThemeProps, CheckedState, CheckedThemeProps, DisabledState, DisabledThemeProps } from "../ComponentStates";
import { HTMLInputProps } from "../HTMLTagProps";

// CheckedThemeProps, DisabledThemeProps checked and disabled are already in HTMLInputProps
export interface CheckboxProps extends SoperioComponent, CheckedState, DisabledState, Omit<HTMLInputProps, "disabled">
{
  label?: string,
  otherNameThanSize?: "md" | "lg",
  variant?: string,
  shape?: "rounded" | "circle" | "square",
  theme?: ComponentTheme;
  config?: ExtendComponentConfig<CheckboxThemeProps, CheckboxConfig>;
}

interface CheckboxThemeProps extends SoperioComponent, CheckedThemeProps, DisabledThemeProps, CheckedDisabledThemeProps
{

}

type ConfigVariants = {
  // TODO Find a better property name
  otherNameThanSize?: Record<string, CheckboxThemeProps>,
  variant?: Record<string, CheckboxThemeProps>,
  shape?: Record<string, CheckboxThemeProps>,
}

export type CheckboxConfig = ComponentConfig<CheckboxThemeProps, ConfigVariants>
