import { ComponentTheme, ParentComponent, SoperioComponent } from "@soperio/core";
import { ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";
import { DisabledState, DisabledThemeProps, SelectedDisabledState, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "../ComponentStates";
import { HTMLButtonProps } from "../HTMLTagProps";

export interface ButtonThemeProps extends SoperioComponent, SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

type ConfigVariants = {
  variant?: { [Property in ButtonVariants]?: ButtonThemeProps; },
  size?: { [Property in ButtonSize]?: ButtonThemeProps; },
  corners?: { [Property in ButtonCorners]?: ButtonThemeProps; },
};

export type ButtonConfig = ComponentConfig<ButtonThemeProps, ConfigVariants>

export interface ButtonProps extends SoperioComponent, ParentComponent, SelectedState, DisabledState, SelectedDisabledState, Omit<HTMLButtonProps, "disabled">, ButtonGeneratedProps
{
  theme?: ComponentTheme,
  config?: ExtendComponentConfig<ButtonThemeProps, ButtonConfig>;
}

// TODO This should be in another file that will be overridden by CLI

export type ButtonVariants = "default" | "light" | "outline" | "link" | "borderless";
export type ButtonSize = "sm" | "md" | "lg" | "xl" | "x2";
export type ButtonCorners = "default" | "square" | "pill";

interface ButtonGeneratedProps
{
  variant?: ButtonVariants;
  size?: ButtonSize,
  corners?: ButtonCorners;
}
