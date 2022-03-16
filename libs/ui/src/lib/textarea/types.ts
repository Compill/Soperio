import { ComponentConfig, ComponentTypings, DisabledState, DisabledThemeProps, ExtendComponentConfig, InvalidState, InvalidThemeProps, SoperioComponent, ValidState, ValidThemeProps } from "@soperio/components";

type TraitProps = ComponentTypings<"Soperio.TextArea">;

export type ComponentProps = SoperioComponent & TraitProps & ValidState & InvalidState & DisabledState;

interface ConfigStateProps extends ValidThemeProps, InvalidThemeProps, DisabledThemeProps { }

export type Config = ComponentConfig<ConfigStateProps, TraitProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
