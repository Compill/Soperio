import { CheckedDisabledThemeProps, CheckedState, CheckedThemeProps, ComponentConfig, ComponentTypings, DisabledState, DisabledThemeProps, ExtendComponentConfig, SoperioComponent } from "@soperio/react";

type VariantProps = ComponentTypings<"Soperio.Checkbox">

export type ComponentProps = SoperioComponent & VariantProps & CheckedState & DisabledState;

interface ConfigStateProps extends CheckedThemeProps, DisabledThemeProps, CheckedDisabledThemeProps { }

export type Config = ComponentConfig<ConfigStateProps, VariantProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
