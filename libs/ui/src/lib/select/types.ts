import { ComponentTheme, ParentComponent, SoperioComponent } from "@soperio/core";
import { ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";
import { DisabledState, DisabledThemeProps } from "../ComponentStates";
import { HTMLSelectProps } from "../HTMLTagProps";

export interface SelectThemeProps extends SoperioComponent, DisabledThemeProps
{

}

export interface SelectConfig extends ComponentConfig
{
  size?: Record<string, SelectThemeProps>,
  variant?: Record<string, SelectThemeProps>,
  corners?: Record<string, SelectThemeProps>,
}

export interface SelectProps extends SoperioComponent, ParentComponent,DisabledState,  Omit<HTMLSelectProps, "size" | "disabled">
{
  size?: "sm" | "md" | "lg" | "xl" | "x2",
  variant?: "default" | "solid" | "underline",
  /**
   * Define the input's border radius. Useless if variant is set to "underline"
   */
  corners?: "default" | "square" | "pill",
  theme?: ComponentTheme,
  config?: ExtendComponentConfig<SelectThemeProps, SelectConfig>;
  length?: number;
}
