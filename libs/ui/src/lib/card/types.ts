import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartComponentConfig, MultiPartComponentConfig, MultiPartTraits, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps, SoperioComponent } from "@soperio/react";

type TraitProps = ComponentTypings<"Soperio.Card">;

export type ComponentProps = SoperioComponent & TraitProps & SelectedState & DisabledState;

interface ConfigStateProps extends SoperioComponent, SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

type CardComponentProps = {
  card?: SoperioComponent & ConfigStateProps,
  header?: SoperioComponent & ConfigStateProps, // CardHeaderThemeProps
  content?: SoperioComponent & ConfigStateProps, // CardContentThemeProps
  footer?: SoperioComponent & ConfigStateProps, // CardFooterThemeProps
}

export type Config = MultiPartComponentConfig<ConfigStateProps, MultiPartTraits<TraitProps, CardComponentProps>>;
export type ExtendConfig = ExtendMultiPartComponentConfig<Config>;