import { ComponentTheme, SoperioComponent, SpacingPositiveScale } from "@soperio/core";
import { Color } from "@soperio/core";
import { CustomComponentConfigFn, SoperioComponentConfig } from "../ComponentConfig";
import { HTMLDivProps } from "../HTMLTagProps";

export interface SpinnerThemeProps extends SoperioComponent
{
  trackColor?: Color
  
}

export const variants = ["default", "track"] as const;

export type SpinnerVariants = typeof variants[number];
export type SpinnerSize = "sm" | "md" | "lg" | "xl" | "x2";
export type SpinnerProgress = 0 | 25 | 50 | 75 | 100;

export interface SpinnerConfig extends SoperioComponentConfig
{
  variant?: { [Property in SpinnerVariants]?: SpinnerThemeProps; },
  size?: { [Property in SpinnerSize]?: SpinnerThemeProps; },
}

export interface SpinnerProps extends SoperioComponent, HTMLDivProps
{
  variant?: SpinnerVariants;
  size?: SpinnerSize,
  theme?: ComponentTheme,
  config?: CustomComponentConfigFn<SpinnerConfig>;
  thickness?: SpacingPositiveScale,
  trackColor?: Color,
  progress?: SpinnerProgress
}
