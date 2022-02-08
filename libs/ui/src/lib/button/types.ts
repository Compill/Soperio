import { ComponentTheme, ParentComponent, SoperioComponent } from "@soperio/core";
import { ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";
import { DisabledState, DisabledThemeProps, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "../ComponentStates";
import { HTMLButtonProps } from "../HTMLTagProps";

export interface ButtonThemeProps extends SoperioComponent, SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

type ConfigVariants = {
  variant?: { [Property in ButtonVariants]?: ButtonThemeProps; },
  size?: { [Property in ButtonSize]?: ButtonThemeProps; },
  corners?: { [Property in ButtonCorners]?: ButtonThemeProps; },
};

export type ButtonConfig = ComponentConfig<ButtonThemeProps, ConfigVariants>
export type ExtendButtonConfig = ExtendComponentConfig<ButtonThemeProps, ButtonConfig>

export interface ButtonProps extends SoperioComponent, ParentComponent, SelectedState, DisabledState, Omit<HTMLButtonProps, "disabled">, ButtonGeneratedProps
{
  theme?: ComponentTheme,
  config?: ExtendButtonConfig;
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


// TODO TO use with CLI to regenerate types
/*
  // Put this in another file. This will be the file that will be overwritten
  export const variants = ["default", "bordered"] as const;
  export const corners = ["square", "rounded", "pill"] as const;

  // This file
  import { variants, corners } from "./GeneratedTypes"
  export type CardVariants = typeof variants[number];
  export type CardCorners = typeof corners[number];





*/
