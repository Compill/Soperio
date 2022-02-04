import { SoperioComponent } from "@soperio/core";
import { ColorTheme } from "@soperio/theming";
import { CustomComponentConfigFn, SoperioComponentConfig } from "../ComponentConfig";
import { DisabledThemeProps, SelectedDisabledThemeProps, SelectedThemeProps } from "../ComponentStates";
import { HTMLDivProps } from "../HTMLTagProps";

export const variants = ["default", "bordered"] as const;

export type CardVariants = typeof variants[number];
export type CardCorners = "default" | "square" | "pill";

export interface CardThemeProps extends SoperioComponent, SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps
{

}

export interface CardConfig extends SoperioComponentConfig
{
  variant?: { [Property in CardVariants]?: CardThemeProps; },
  corners?: { [Property in CardCorners]?: CardThemeProps; },
}

export interface CardProps extends SoperioComponent, HTMLDivProps
{
  theme?: string | ColorTheme;
  variant?: CardVariants;
  corners?: CardCorners;
  config?: CustomComponentConfigFn<CardConfig>;
}
