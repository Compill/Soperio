import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartComponentConfig, MultiPartComponentConfig, MultiPartTraits, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps, SoperioComponent } from "@soperio/react";

type TraitProps = ComponentTypings<"Soperio.List">;

export type ComponentProps = SoperioComponent & TraitProps & SelectedState & DisabledState;

interface ConfigStateProps extends SoperioComponent, SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

type ListComponentProps = {
    list?: SoperioComponent & ConfigStateProps,
    listItem?: SoperioComponent & ConfigStateProps,
    listItemIcon?: SoperioComponent & ConfigStateProps,
}

export type Config = MultiPartComponentConfig<ConfigStateProps, MultiPartTraits<TraitProps, ListComponentProps>>;
export type ExtendConfig = ExtendMultiPartComponentConfig<Config>;
