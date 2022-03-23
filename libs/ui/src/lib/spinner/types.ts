import { ComponentConfig, ComponentTypings, DisabledThemeProps, ExtendComponentConfig, NoStateProps, SelectedDisabledThemeProps, SelectedThemeProps, SoperioComponent } from "@soperio/components";
import { Color, SpacingPositive } from "@soperio/theming";

type TraitProps = ComponentTypings<"Soperio.Spinner">

interface CustomProps extends SoperioComponent 
{
  trackColor?: Color,
  thickness?: SpacingPositive,
  progress?: 0 | 25 | 50 | 75 | 100
}

export type ComponentProps = TraitProps & CustomProps

export type Config = ComponentConfig<CustomProps, TraitProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
