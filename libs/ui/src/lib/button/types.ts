import { ComponentConfig, ComponentTypings, DisabledState, DisabledThemeProps, ExtendComponentConfig, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps, SoperioComponent } from "@soperio/react";


type TraitProps = ComponentTypings<"Soperio.Button">

export type ComponentProps = SoperioComponent & TraitProps & SelectedState & DisabledState; // & SurfaceSchemeProps

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }// , SurfaceVariantProps

export type Config = ComponentConfig<ConfigStateProps, TraitProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
