import { ComponentConfig, ComponentTypings, DisabledThemeProps, ExtendComponentConfig, SelectedDisabledThemeProps, SelectedThemeProps, SoperioComponent } from "@soperio/react";


type TraitProps = ComponentTypings<"Soperio.Scrollable">

export type ComponentProps = SoperioComponent & TraitProps;

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

export type Config = ComponentConfig<ConfigStateProps, TraitProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;