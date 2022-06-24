import { ActiveState, ActiveThemeProps, ComponentConfig, ComponentTypings, DisabledState, DisabledThemeProps, ExtendComponentConfig, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps, SoperioComponent, ParentComponent } from "@soperio/react";


type TraitProps = ComponentTypings<"Soperio.Surface">

export type ComponentProps = SoperioComponent & ParentComponent & TraitProps & ActiveState & SelectedState & DisabledState;

interface ConfigStateProps extends ActiveThemeProps, SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

export type Config = ComponentConfig<ConfigStateProps, TraitProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
