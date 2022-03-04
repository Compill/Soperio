import { ComponentTypings } from "@soperio/components-theming";
import { SoperioComponent } from "@soperio/core";
import { ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";
import { CheckedDisabledThemeProps, CheckedState, CheckedThemeProps, DisabledState, DisabledThemeProps } from "../ComponentStates";

type VariantProps = ComponentTypings<"Soperio.Checkbox">

export type ComponentProps = SoperioComponent & VariantProps & CheckedState & DisabledState;

interface ConfigStateProps extends CheckedThemeProps, DisabledThemeProps, CheckedDisabledThemeProps { }

export type Config = ComponentConfig<ConfigStateProps, VariantProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;
