import { ComponentConfig, ComponentTypings, ExtendComponentConfig, NoStateProps, SoperioComponent } from "@soperio/components";


type VariantProps = ComponentTypings<"Soperio.Badge">;

export type ComponentProps = SoperioComponent & VariantProps

export type Config = ComponentConfig<NoStateProps, VariantProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;