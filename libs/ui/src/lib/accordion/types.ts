import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartComponentConfig, MultiPartComponentConfig, MultiPartTraits, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps, SoperioComponent } from "@soperio/react";
import { ButtonProps } from "../button";

type TraitProps = ComponentTypings<"Soperio.Accordion">;

export type ComponentProps = SoperioComponent & TraitProps & SelectedState & DisabledState;

interface ConfigStateProps extends SoperioComponent, SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

type AccordionComponentProps = {
  accordion?: SoperioComponent & ConfigStateProps,
  item?: SoperioComponent & ConfigStateProps, // AccordionHeaderThemeProps
  itemHeader?: SoperioComponent & ConfigStateProps, // AccordionHeaderThemeProps
  itemHeaderLabel?: SoperioComponent & ConfigStateProps, // AccordionHeaderThemeProps
  itemHeaderCollapseButton?: SoperioComponent & ConfigStateProps,
  itemContent?: SoperioComponent & ConfigStateProps, // AccordionContentThemeProps
}

export type Config = MultiPartComponentConfig<ConfigStateProps, MultiPartTraits<TraitProps, AccordionComponentProps>>;
export type ExtendConfig = ExtendMultiPartComponentConfig<Config>;
