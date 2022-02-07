import { ComponentTheme, SoperioComponent } from "@soperio/core";
import { ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";
import { DisabledState, DisabledThemeProps } from "../ComponentStates";
import { HTMLInputProps } from "../HTMLTagProps";

export interface InputThemeProps extends SoperioComponent, DisabledThemeProps
{

}

export interface InputConfig extends ComponentConfig<InputThemeProps>
{
  size?: Record<string, InputThemeProps>,
  variant?: Record<string, InputThemeProps>,
  corners?: Record<string, InputThemeProps>,
}

export interface InputProps extends SoperioComponent, DisabledState, Omit<HTMLInputProps, "size" |"disabled">
{
  size?: "sm" | "md" | "lg" | "xl" | "x2",
  variant?: "default" | "solid" | "underline",
  /**
   * Define the input's border radius. Useless if variant is set to "underline"
   */
  corners?: "default" | "square" | "pill",
  theme?: ComponentTheme,
  length?: number;
  config?: ExtendComponentConfig<InputThemeProps, InputConfig>;
}
