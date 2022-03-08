import { ComponentConfig, ComponentTypings, DisabledThemeProps, ExtendComponentConfig, NoStateProps, SelectedDisabledThemeProps, SelectedThemeProps, SoperioComponent } from "@soperio/components";
import { Color, SpacingPositive } from "@soperio/theming";

type VariantProps = ComponentTypings<"Soperio.Spinner">

interface CustomProps extends SoperioComponent 
{
  trackColor?: Color,
  thickness?: SpacingPositive,
  progress?: 0 | 25 | 50 | 75 | 100
}

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }
export type ComponentProps = VariantProps & CustomProps

export type Config = ComponentConfig<CustomProps, VariantProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
