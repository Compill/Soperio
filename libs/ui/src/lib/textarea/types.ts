import { ComponentConfig, ComponentTypings, DisabledState, DisabledThemeProps, ExtendComponentConfig, InvalidState, InvalidThemeProps, SoperioComponent, ValidState, ValidThemeProps } from "@soperio/components";

type VariantProps = ComponentTypings<"Soperio.TextArea">;

export type ComponentProps = SoperioComponent & VariantProps & ValidState & InvalidState & DisabledState;

interface ConfigStateProps extends ValidThemeProps, InvalidThemeProps, DisabledThemeProps { }

export type Config = ComponentConfig<ConfigStateProps, VariantProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
