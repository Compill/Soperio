import { CheckedDisabledThemeProps, CheckedState, CheckedThemeProps, ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartComponentConfig, MultiPartComponentConfig, MultiPartTraits,  SoperioComponent } from "@soperio/react";

type TraitProps = ComponentTypings<"Soperio.Switch">;

export type ComponentProps = SoperioComponent & TraitProps  & DisabledState & CheckedState

interface ConfigStateProps extends SoperioComponent,  DisabledThemeProps, CheckedThemeProps, CheckedDisabledThemeProps { }

type SwitchComponentProps = {
  switch?: SoperioComponent & ConfigStateProps,
  track?: SoperioComponent & ConfigStateProps, // SwitchHeaderThemeProps
  thumb?: SoperioComponent & ConfigStateProps, // SwitchContentThemeProps
  label?: SoperioComponent & ConfigStateProps, // SwitchFooterThemeProps
}

export type Config = MultiPartComponentConfig<ConfigStateProps, MultiPartTraits<TraitProps, SwitchComponentProps>>;
export type ExtendConfig = ExtendMultiPartComponentConfig<Config>;
