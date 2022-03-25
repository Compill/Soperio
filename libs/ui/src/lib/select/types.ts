import { ComponentConfig, ComponentTypings, DisabledState, DisabledThemeProps, ExtendComponentConfig, InvalidState, InvalidThemeProps, SoperioComponent, ValidState, ValidThemeProps } from "@soperio/react";

type TraitProps = ComponentTypings<"Soperio.Select">;

export type ComponentProps = SoperioComponent & TraitProps & ValidState & InvalidState & DisabledState;

interface ConfigStateProps extends ValidThemeProps, InvalidThemeProps, DisabledThemeProps { }

export type Config = ComponentConfig<ConfigStateProps, TraitProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;