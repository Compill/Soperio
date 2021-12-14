import { ComponentTheme, SoperioComponent } from "@soperio/core";
import { CustomComponentConfigFn, SoperioComponentConfig } from "../ComponentConfig";
import { HTMLInputProps } from "../HTMLTagProps";

export interface InputThemeProps extends SoperioComponent
{
  disabled?: SoperioComponent,
}

export interface InputConfig extends SoperioComponentConfig
{
  size?: Record<string, InputThemeProps>,
  variant?: Record<string, InputThemeProps>,
  corners?: Record<string, InputThemeProps>,
}

export interface InputProps extends SoperioComponent, Omit<HTMLInputProps, "size">
{
  size?: "sm" | "md" | "lg" | "xl" | "x2",
  variant?: "default" | "solid" | "underline",
  /**
   * Define the input's border radius. Useless if variant is set to "underline"
   */
  corners?: "default" | "square" | "pill",
  theme?: ComponentTheme,
  length?: number;
  config?: CustomComponentConfigFn<InputConfig>;
}
