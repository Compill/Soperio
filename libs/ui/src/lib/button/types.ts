import { ComponentConfig, ComponentTypings, DisabledState, DisabledThemeProps, ExtendComponentConfig, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps, SoperioComponent } from "@soperio/components";


type TraitProps = ComponentTypings<"Soperio.Button">

export type ComponentProps = SoperioComponent & TraitProps & SelectedState & DisabledState;

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

export type Config = ComponentConfig<ConfigStateProps, TraitProps>;
export type ExtendConfig = ExtendComponentConfig<Config>;

// Note to myself
// Now that we have only one props interface in the types file
// We can move this definition to the component file
// and name the generated file "types.ts"

/* Code Generator

Scan for traits in json config

# Step 1: Create types

Ex: for variant "size", transform the name to camel case and add an "s" at the end
Then transform the array of variant in to a pipe ["sm", "md", "lg"] => "sm" | "md" | "lg"

Create the associated type
export type Sizes = "sm" | "md" | "lg";64


# Step 2 : Create GeneratedProps type

Take each variant and associate it to its newly created type at step 1
This type extends SoperioComponent
Don't forget to add the states from the config if present

type GeneratedProps = SoperioComponent & SelectedStage & DisabledState &
{
  variant?: Traits;
  size?: Sizes,
  corners?: Corners;
}

# Step 3 : Create ConfigTrait type

type ConfigTraits<T extends SoperioComponent> = {
  [Property in keyof GeneratedProps]?: { [Prop in keyof GeneratedProps[Property]]?: T }
}

Don't forget to import SoperioComponent
import { SoperioComponent } from "@soperio/core";

# Step 4 : Create ThemeProps interface

Defaults to extends SoperioComponent

Analyze component json config and extends other state interfaces as needed

config: {
  ...,
  state: {
    disabled: true
    checked: true
  }
}

=> interface ThemeProps extends SoperioComponent extends CheckedThemeProps, DisabledThemeProps, CheckedDisabledThemeProps

# Step 5 : Generate Config and ExtendConfig interfaces

export type Config = ComponentConfig<ThemeProps, ConfigTraits<ThemeProps>>;
export type ExtendConfig = ExtendComponentConfig<ThemeProps, Config>;

Detect if json config is multipart component or not

*/
