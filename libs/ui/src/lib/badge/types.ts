import { ComponentConfig, ComponentTypings, ExtendComponentConfig, NoStateProps, SoperioComponent } from "@soperio/components";


type TraitProps = ComponentTypings<"Soperio.Badge">;

export type ComponentProps = SoperioComponent & TraitProps

export type Config = ComponentConfig<NoStateProps, TraitProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;