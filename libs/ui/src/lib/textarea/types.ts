import { ComponentTheme, SoperioComponent } from "@soperio/core";
import { ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";
import { DisabledState, DisabledThemeProps } from "../ComponentStates";
import { HTMLTextAreaProps } from "../HTMLTagProps";

export interface TextAreaThemeProps extends SoperioComponent, DisabledThemeProps, Omit<HTMLTextAreaProps, "disabled">
{

}

export const variants = ["default", "solid", "underline"] as const;

export type TextAreaVariants = typeof variants[number];
export type TextAreaSize = "sm" | "md" | "lg" | "xl" | "x2";
export type TextAreaCorners = "default" | "square" | "pill";

export interface TextAreaConfig extends ComponentConfig<TextAreaThemeProps>
{
  variant?: { [Property in TextAreaVariants]?: TextAreaThemeProps; },
  size?: { [Property in TextAreaSize]?: TextAreaThemeProps; },
  corners?: { [Property in TextAreaCorners]?: TextAreaThemeProps; },
}

export interface TextAreaProps extends SoperioComponent, DisabledState, Omit<HTMLTextAreaProps, "disabled">
{
  size?: TextAreaSize,
  variant?: TextAreaVariants,
  /**
   * Define the input's border radius. Useless if variant is set to "underline"
   */
  corners?: TextAreaCorners,
  theme?: ComponentTheme,
  config?: ExtendComponentConfig<TextAreaThemeProps, TextAreaConfig>;
}
