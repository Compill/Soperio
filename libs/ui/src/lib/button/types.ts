import { ComponentTheme, ParentComponent, SoperioComponent } from "@soperio/core";
import { CustomComponentConfigFn, SoperioComponentConfig } from "../ComponentConfig";
import { HTMLButtonProps } from "../HTMLTagProps";

export interface ButtonThemeProps extends SoperioComponent
{
  selected?: SoperioComponent,
  disabled?: SoperioComponent,
  selectedDisabled?: SoperioComponent,
}

export const variants = ["default", "light", "outline", "link", "borderless"] as const;

export type ButtonVariants = typeof variants[number];
export type ButtonSize = "sm" | "md" | "lg" | "xl" | "x2";
export type ButtonCorners = "default" | "square" | "pill";

export interface ButtonConfig extends SoperioComponentConfig
{
  variant?: { [Property in ButtonVariants]?: ButtonThemeProps; },
  size?: { [Property in ButtonSize]?: ButtonThemeProps; },
  corners?: { [Property in ButtonCorners]?: ButtonThemeProps; },
}

export interface ButtonProps extends SoperioComponent, ParentComponent, HTMLButtonProps
{
  variant?: ButtonVariants;
  size?: ButtonSize,
  corners?: ButtonCorners,
  selected?: boolean,
  theme?: ComponentTheme,
  config?: CustomComponentConfigFn<ButtonConfig>;
}
