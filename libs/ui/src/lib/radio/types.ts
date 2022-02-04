import { SoperioComponent } from "@soperio/core";
import { ColorTheme } from "@soperio/theming";
import { CustomComponentConfigFn, SoperioComponentConfig } from "../ComponentConfig";
import { CheckedDisabledThemeProps, CheckedThemeProps, DisabledThemeProps } from "../ComponentStates";
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

export interface RadioThemeProps extends SoperioComponent, CheckedThemeProps, DisabledThemeProps, CheckedDisabledThemeProps
{

}

export interface RadioConfig extends SoperioComponentConfig
{
  otherNameThanSize?: Record<string, RadioThemeProps>,
  variant?: Record<string, RadioThemeProps>,
}
