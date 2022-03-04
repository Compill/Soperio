import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartComponentConfig, MultiPartComponentConfig, MultiPartVariants, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps, SoperioComponent } from "@soperio/components";

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