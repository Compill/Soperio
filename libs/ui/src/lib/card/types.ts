import { ComponentTypings } from "@soperio/components-theming";
import { SoperioComponent } from "@soperio/core";
import { ExtendMultiPartComponentConfig, MultiPartComponentConfig, MultiPartVariants } from "../ComponentConfig";
import { DisabledState, DisabledThemeProps, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "../ComponentStates";

type VariantProps = ComponentTypings<"Soperio.Card">;

export type ComponentProps = SoperioComponent & VariantProps & SelectedState & DisabledState;

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

type CardComponentProps = {
  card?: SoperioComponent & ConfigStateProps,
  header?: SoperioComponent & ConfigStateProps, // CardHeaderThemeProps
  content?: SoperioComponent & ConfigStateProps, // CardContentThemeProps
  footer?: SoperioComponent & ConfigStateProps, // CardFooterThemeProps
}

export type Config = MultiPartComponentConfig<ConfigStateProps, MultiPartVariants<VariantProps, CardComponentProps>>;
export type ExtendConfig = ExtendMultiPartComponentConfig<Config>;