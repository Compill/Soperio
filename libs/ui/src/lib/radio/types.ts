import { CheckedDisabledThemeProps, CheckedState, CheckedThemeProps, ComponentConfig, ComponentTypings, DisabledState, DisabledThemeProps, ExtendComponentConfig, SoperioComponent } from "@soperio/components";

type VariantProps = ComponentTypings<"Soperio.Radio">;

export type ComponentProps = SoperioComponent & VariantProps & CheckedState & DisabledState;

interface ConfigStateProps extends CheckedThemeProps, DisabledThemeProps, CheckedDisabledThemeProps { }

export type Config = ComponentConfig<ConfigStateProps, VariantProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;