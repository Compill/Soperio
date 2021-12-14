import { ComponentTheme, ParentComponent, SoperioComponent } from "@soperio/core";
import { CustomComponentConfigFn, SoperioComponentConfig } from "../ComponentConfig";
import { HTMLSelectProps } from "../HTMLTagProps";

export interface SelectThemeProps extends SoperioComponent
{
  disabled?: SoperioComponent,
}

export interface SelectConfig extends SoperioComponentConfig
{
  size?: Record<string, SelectThemeProps>,
  variant?: Record<string, SelectThemeProps>,
  corners?: Record<string, SelectThemeProps>,
}

export interface SelectProps extends SoperioComponent, ParentComponent, Omit<HTMLSelectProps, "size">
{
  size?: "sm" | "md" | "lg" | "xl" | "x2",
  variant?: "default" | "solid" | "underline",
  /**
   * Define the input's border radius. Useless if variant is set to "underline"
   */
  corners?: "default" | "square" | "pill",
  theme?: ComponentTheme,
  config?: CustomComponentConfigFn<SelectConfig>;
  length?: number;
}
