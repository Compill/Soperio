import { SoperioComponent } from "@soperio/core";
import { ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";
import { DisabledState, DisabledThemeProps, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "../ComponentStates";

export const variants = ["default", "light", "outline", "light-outline"] as const;

// type Variants = typeof variants[number];

type Variants = "default" | "light" | "outline" | "link" | "borderless";
type Sizes = "sm" | "md" | "lg" | "xl" | "x2";
type Corners = "default" | "square" | "pill";

export type VariantProps = {
  variant: Variants;
  size?: Sizes,
  corners?: Corners;
}
export type GeneratedProps = SoperioComponent & SelectedState & DisabledState

type B<Type, T> = {
  [key in keyof Type]?: T
}

export type ConfigVariants<T extends SoperioComponent> =
{
  [key in keyof VariantProps]?: B<VariantProps[key], T>
};

export interface ThemeProps extends SoperioComponent, SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

type A = ConfigVariants<ThemeProps>

export type Config = ComponentConfig<ThemeProps, ConfigVariants<ThemeProps>>;
export type ExtendConfig = ExtendComponentConfig<ThemeProps, Config>;

// export type Config<T = any> = ComponentConfig<ThemeProps & T, ConfigVariants<ThemeProps & T>>;
// export type ExtendConfig<T = any> = ExtendComponentConfig<ThemeProps & T, Config<T>>;

// export type Config<T extends any | undefined> = ComponentConfig<T extends any ? ThemeProps & T : ThemeProps, ConfigVariants<T extends any ? ThemeProps & T : ThemeProps>>;
// export type ExtendConfig<T extends any | undefined> = ExtendComponentConfig<T extends any ? ThemeProps & T : ThemeProps, Config<T>>;


// Note to myself
// Now that we have only one props interface in the types file
// We can move this definition to the component file
// and name the generated file "types.ts"

/* Code Generator

Scan for variants in json config

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
  variant?: Variants;
  size?: Sizes,
  corners?: Corners;
}

# Step 3 : Create ConfigVariant type

type ConfigVariants<T extends SoperioComponent> = {
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

export type Config = ComponentConfig<ThemeProps, ConfigVariants<ThemeProps>>;
export type ExtendConfig = ExtendComponentConfig<ThemeProps, Config>;

Detect if json config is multipart component or not

*/
