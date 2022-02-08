import { ComponentTheme, SoperioComponent } from "@soperio/core";
import { ColorTheme } from "@soperio/theming";
import { ExtendMultiPartComponentConfig, MultiPartComponentConfig } from "../ComponentConfig";
import { DisabledThemeProps, SelectedDisabledThemeProps, SelectedThemeProps } from "../ComponentStates";
import { HTMLDivProps } from "../HTMLTagProps";

export const variants = ["default", "bordered"] as const;

export type CardVariants = typeof variants[number];
export type CardCorners = "default" | "square" | "pill";

export interface CardThemeProps extends SoperioComponent, SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps
{

}

type CardComponentProps = {
  card?: CardThemeProps,
  header?: CardThemeProps, // CardHeaderThemeProps
  content?: CardThemeProps, // CardContentThemeProps
  footer?: CardThemeProps, // CardFooterThemeProps
};

type ConfigVariants = {
  variant?: { [Property in CardVariants]?: CardComponentProps },
  corners?: { [Property in CardCorners]?: CardComponentProps },
};

export type CardConfig = MultiPartComponentConfig<CardThemeProps, ConfigVariants>;

export interface CardProps extends SoperioComponent, HTMLDivProps
{
  theme?: ComponentTheme;
  variant?: CardVariants;
  corners?: CardCorners;
  config?: ExtendMultiPartComponentConfig<CardThemeProps, CardConfig>;
}
