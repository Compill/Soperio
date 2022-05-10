import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartComponentConfig, MultiPartComponentConfig, MultiPartTraits, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps, SoperioComponent } from "@soperio/react";

type TraitProps = ComponentTypings<"Soperio.Modal">;

export type ComponentProps = SoperioComponent & TraitProps & SelectedState & DisabledState;

interface ConfigStateProps extends SoperioComponent, SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

type ModalComponentProps = {
  modal?: SoperioComponent & ConfigStateProps,
  modalContent?: SoperioComponent & ConfigStateProps,
  header?: SoperioComponent & ConfigStateProps, // ModalHeaderThemeProps
  body?: SoperioComponent & ConfigStateProps, // ModalContentThemeProps
  footer?: SoperioComponent & ConfigStateProps, // ModalFooterThemeProps
}

export type Config = MultiPartComponentConfig<ConfigStateProps, MultiPartTraits<TraitProps, ModalComponentProps>>;
export type ExtendConfig = ExtendMultiPartComponentConfig<Config>;
