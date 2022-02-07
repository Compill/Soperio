import { SoperioComponent } from "@soperio/core";
import { ColorTheme } from "@soperio/theming";
import { ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";
import { CheckedDisabledThemeProps, CheckedThemeProps, CheckedState, DisabledState, DisabledThemeProps, CheckedDisabledState } from "../ComponentStates";
import { HTMLInputProps } from "../HTMLTagProps";

export interface RadioProps extends SoperioComponent, CheckedState, DisabledState, CheckedDisabledState, Omit<HTMLInputProps, "disabled">
{
  label?: string,
  otherNameThanSize?: "md" | "lg",
  variant?: string,
  theme?: string | ColorTheme;
  dotSize?: "sm" | "md" | "lg";
  config?: ExtendComponentConfig<RadioThemeProps, RadioConfig>;
}

export interface RadioThemeProps extends SoperioComponent, CheckedThemeProps, DisabledThemeProps, CheckedDisabledThemeProps
{

}

export interface RadioConfig extends ComponentConfig
{
  otherNameThanSize?: Record<string, RadioThemeProps>,
  variant?: Record<string, RadioThemeProps>,
}
