import { ComponentTypings } from "@soperio/components-theming";
import { SoperioComponent } from "@soperio/core";
import { ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";
import { DisabledState, DisabledThemeProps, InvalidState, InvalidThemeProps, ValidState, ValidThemeProps } from "../ComponentStates";

type VariantProps = ComponentTypings<"Soperio.TextArea">;

export type ComponentProps = SoperioComponent & VariantProps & ValidState & InvalidState & DisabledState;

interface ConfigStateProps extends ValidThemeProps, InvalidThemeProps, DisabledThemeProps { }

export type Config = ComponentConfig<ConfigStateProps, VariantProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
