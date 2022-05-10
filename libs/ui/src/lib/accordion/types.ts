import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartComponentConfig, MultiPartComponentConfig, MultiPartTraits, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps, SoperioComponent } from "@soperio/react";

type TraitProps = ComponentTypings<"Soperio.Accordion">;

export type ComponentProps = SoperioComponent & TraitProps & SelectedState & DisabledState;

interface ConfigStateProps extends SoperioComponent, SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

type AccordionComponentProps = {
  accordion?: SoperioComponent & ConfigStateProps,
  accordionHeader?: SoperioComponent & ConfigStateProps, // AccordionHeaderThemeProps
  accodrionContent?: SoperioComponent & ConfigStateProps, // AccordionContentThemeProps
}

export type Config = MultiPartComponentConfig<ConfigStateProps, MultiPartTraits<TraitProps, AccordionComponentProps>>;
export type ExtendConfig = ExtendMultiPartComponentConfig<Config>;