import { CheckedDisabledThemeProps, CheckedState, CheckedThemeProps, ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartComponentConfig, MultiPartComponentConfig, MultiPartTraits, SoperioComponent } from "@soperio/react";

type TraitProps = ComponentTypings<"Soperio.Avatar">;

export type ComponentProps = SoperioComponent & TraitProps  & DisabledState & CheckedState

interface ConfigStateProps extends SoperioComponent,  DisabledThemeProps, CheckedThemeProps, CheckedDisabledThemeProps { }

type AvatarComponentProps = {
  avatar?: SoperioComponent & ConfigStateProps,
  image?: SoperioComponent & ConfigStateProps, // SwitchHeaderThemeProps
  initials?: SoperioComponent & ConfigStateProps,
  badge?: SoperioComponent & ConfigStateProps,  // SwitchContentThemeProps
}

export type Config = MultiPartComponentConfig<ConfigStateProps, MultiPartTraits<TraitProps, AvatarComponentProps>>;
export type ExtendConfig = ExtendMultiPartComponentConfig<Config>;
