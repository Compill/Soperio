import { ComponentConfig, ComponentTypings, ExtendComponentConfig, SoperioComponent } from "@soperio/components";
import { Color, SpacingPositive } from "@soperio/theming";

type VariantProps = ComponentTypings<"Soperio.Spinner">

interface SpinnerProps extends SoperioComponent
{
  trackColor?: Color,
  thickness?: SpacingPositive,
  progress?: 0 | 25 | 50 | 75 | 100
}

export type ComponentProps = SoperioComponent & VariantProps & SpinnerProps

export type Config = ComponentConfig<SpinnerProps, VariantProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
