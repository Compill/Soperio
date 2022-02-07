import { ComponentTheme, SoperioComponent } from "@soperio/core";
import { Color, SpacingPositive } from "@soperio/theming";
import { ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";
import { HTMLDivProps } from "../HTMLTagProps";

export interface SpinnerThemeProps extends SoperioComponent
{
  trackColor?: Color,
  thickness?: SpacingPositive,
  progress?: SpinnerProgress
}

export const variants = ["default", "track"] as const;

export type SpinnerVariants = typeof variants[number];
export type SpinnerSize = "sm" | "md" | "lg" | "xl" | "x2";
export type SpinnerProgress = 0 | 25 | 50 | 75 | 100;

export interface SpinnerConfig extends ComponentConfig<SpinnerThemeProps>
{
  variant?: { [Property in SpinnerVariants]?: SpinnerThemeProps; },
  size?: { [Property in SpinnerSize]?: SpinnerThemeProps; },
}

export interface SpinnerProps extends SoperioComponent, HTMLDivProps
{
  variant?: SpinnerVariants;
  size?: SpinnerSize,
  theme?: ComponentTheme,
  config?: ExtendComponentConfig<SpinnerThemeProps, SpinnerConfig>;
  thickness?: SpacingPositive,
  trackColor?: Color,
  progress?: SpinnerProgress
}
