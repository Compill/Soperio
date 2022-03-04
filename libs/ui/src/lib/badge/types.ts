import { ComponentTypings } from "@soperio/components-theming";
import { SoperioComponent } from "@soperio/core";
import { ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";
import { NoStateProps } from "../ComponentStates";


type VariantProps = ComponentTypings<"Soperio.Badge">;

export type ComponentProps = SoperioComponent & VariantProps

export type Config = ComponentConfig<NoStateProps, VariantProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;