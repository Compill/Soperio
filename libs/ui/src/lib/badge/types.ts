import { ParentComponent, SoperioComponent } from "@soperio/core";
import { ColorTheme } from "@soperio/theming";
import { CustomComponentConfigFn, SoperioComponentConfig } from "../ComponentConfig";

// export interface BadgeThemeProps extends SoperioComponent
// {

// }

export const variants = ["default", "light", "outline", "light-outline"] as const;

export type BadgeVariants = typeof variants[number];
export type BadgeSize = "xs" | "sm" | "md" | "lg" | "xl" | "x2";
export type BadgeShape = "default" | "rounded" | "pill" | "square";


export interface BadgeConfig extends SoperioComponentConfig
{
  variant?: { [Property in BadgeVariants]?: SoperioComponent; },
  size?: { [Property in BadgeSize]?: SoperioComponent; },
  shape?: { [Property in BadgeShape]?: SoperioComponent; },
}

export interface BadgeProps extends SoperioComponent, ParentComponent
{
  variant?: BadgeVariants,
  theme?: string | ColorTheme,
  shape?: BadgeShape,
  size?: BadgeSize,
  config?: CustomComponentConfigFn<BadgeConfig>;
}
