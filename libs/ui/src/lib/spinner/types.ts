import { ComponentTypings } from "@soperio/components-theming";
import { SoperioComponent } from "@soperio/core";
import { Color, SpacingPositive } from "@soperio/theming";
import { ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";

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
