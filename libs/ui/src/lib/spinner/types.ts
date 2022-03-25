import { Color, ComponentConfig, ComponentTypings, ExtendComponentConfig, SoperioComponent, SpacingPositive } from "@soperio/react";

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
