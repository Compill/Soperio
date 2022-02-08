import { ComponentTheme, SoperioComponent } from "@soperio/core";
import { ColorTheme } from "@soperio/theming";
import { ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";
import { CheckedDisabledThemeProps, CheckedThemeProps, CheckedState, DisabledState, DisabledThemeProps } from "../ComponentStates";
import { HTMLInputProps } from "../HTMLTagProps";

export interface RadioProps extends SoperioComponent, CheckedState, DisabledState, Omit<HTMLInputProps, "disabled">
{
  label?: string,
  otherNameThanSize?: "md" | "lg",
  variant?: string,
  theme?: ComponentTheme;
  dotSize?: "sm" | "md" | "lg";
  config?: ExtendComponentConfig<RadioThemeProps, RadioConfig>;
}

export interface RadioThemeProps extends SoperioComponent, CheckedThemeProps, DisabledThemeProps, CheckedDisabledThemeProps
{

}

type ConfigVariants = {
  otherNameThanSize?: Record<string, RadioThemeProps>,
  variant?: Record<string, RadioThemeProps>,
}

export type RadioConfig = ComponentConfig<RadioThemeProps, ConfigVariants>
