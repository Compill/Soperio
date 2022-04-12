import { ComponentConfig, ComponentTypings, ExtendComponentConfig, NoStateProps, SoperioComponent } from "@soperio/react";


type TraitProps = ComponentTypings<"Soperio.Divider">;

export type ComponentProps = SoperioComponent & TraitProps

export type Config = ComponentConfig<NoStateProps, TraitProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;