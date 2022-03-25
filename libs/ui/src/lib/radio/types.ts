import { CheckedDisabledThemeProps, CheckedState, CheckedThemeProps, ComponentConfig, ComponentTypings, DisabledState, DisabledThemeProps, ExtendComponentConfig, SoperioComponent } from "@soperio/react";

type TraitProps = ComponentTypings<"Soperio.Radio">;

export type ComponentProps = SoperioComponent & TraitProps & CheckedState & DisabledState;

interface ConfigStateProps extends CheckedThemeProps, DisabledThemeProps, CheckedDisabledThemeProps { }

export type Config = ComponentConfig<ConfigStateProps, TraitProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;