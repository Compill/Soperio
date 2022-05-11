import { ColorTheme, SoperioComponent } from "@soperio/theming";
import { ComponentStateProps, NoStateProps } from "./ComponentStates";

// export type SoperioComponentConfig = Record<string, unknown>;
// export interface SoperioComponentConfig<T extends SoperioComponent> {
//   defaultProps?: T,
//   defaultTraits?: [ string: any ]
//   [key: string]: any
// }

// export interface ComponentConfig<T extends SoperioComponent>
// {
//   mode: "extends" | "replace";
//   config: SoperioComponentConfig<T>;
// }

// export type SoperioComponentConfigFn<T extends SoperioComponent> = (theme: ColorTheme, darkMode: boolean) => T;

// export type CustomComponentConfigFn<T extends SoperioComponent> = (theme:ColorTheme, darkMode: boolean) => ComponentConfig<T>


type TraitConfig<T extends SoperioComponent> = {
  [key: string]: { [key: string]: T; };
};


type ComponentState = {
  active?: true,
  checked?: true,
  disabled?: true,
  invalid?: true,
  selected?: true,
  valid?: true,
};

type ConfigTraits<V extends { [k: string]: any; }, T> = {
  [key in keyof V]: { [Property in NonNullable<V[key]>]?: SoperioComponent & T; }
};

// Basic component config
// We got two reserved keys, defaultProps and defaultTraits
// for applying the logic for setting the defaults automatically
// and then any other key to define a kind of "trait" like variant,
// size, shape, corners, etc...
// export type BaseComponentConfig<T extends SoperioComponent, C extends TraitConfig<T> = Record<string, Record<string, T>>> =
//   {
//     defaultProps?: T,
//     defaultTraits?: { [key: string]: string; };
//     traits?: C | undefined;
//   };

type StateAndExtraProps = ComponentStateProps & Record<string, any>;

export type BaseComponentConfig<T extends StateAndExtraProps, C extends Record<string, string> = Record<string, string>> =
  {
    defaultProps?: SoperioComponent & T,
    defaultTraits?: { [key: string]: string; };
    traits?: ConfigTraits<C, T> | undefined;
  };


// Same thing bus as a function where user can
// use values from the theme and darkMode
// type ComponentConfigFn<T extends SoperioComponent, C extends TraitConfig<T>> = (theme: ColorTheme, darkMode: boolean) => BaseComponentConfig<T, C>;

type ComponentConfigFn<T extends StateAndExtraProps, C extends Record<string, string> = Record<string, string>> = (theme: ColorTheme, darkMode: boolean) => BaseComponentConfig<T, C>;


// export type ComponentConfig<T extends SoperioComponent, C extends TraitConfig<T> = Record<string, Record<string, T>>> = BaseComponentConfig<T, C> | ComponentConfigFn<T, C>;

export type ComponentConfig<T extends StateAndExtraProps = NoStateProps, C extends Record<string, string> = Record<string, string>> = BaseComponentConfig<T, C> | ComponentConfigFn<T, C>;


// Custom component config to extends or override the theme's
// component config
export interface ExtendComponentConfig<P extends ComponentConfig<StateAndExtraProps>>
{
  mode: "extends" | "replace";
  config: P;
}

// export type ExtendComponentConfigFn<T extends SoperioComponent> = (theme: ColorTheme, darkMode: boolean) => ComponentConfig<T>

export type MultiPartTraits<V extends Record<string, string>, T> = {
  [key in keyof V]?: { [Property in NonNullable<V[key]>]?: T; }
};

type MultiPartTraitConfig<T> = {
  [key: string]: { [key: string]: { [key: string]: SoperioComponent & T }; };
};

export type BaseMultiPartComponentConfig<T extends StateAndExtraProps = NoStateProps, C extends MultiPartTraitConfig<T> = Record<string, Record<string, Record<string, T>>>> =
  {
    subComponents: string[];
    defaultProps?: { [key: string]: SoperioComponent & T},
    defaultTraits?: { [key: string]: string; };
    traits?: C | undefined;
  };

type MultiPartComponentConfigFn<T extends StateAndExtraProps, C extends MultiPartTraitConfig<T> = Record<string, Record<string, Record<string, T>>>> = (theme: ColorTheme, darkMode: boolean) => BaseMultiPartComponentConfig<T, C>;

export type MultiPartComponentConfig<T extends StateAndExtraProps, C extends MultiPartTraitConfig<T> = Record<string, Record<string, Record<string, T>>>> = BaseMultiPartComponentConfig<T, C> | MultiPartComponentConfigFn<T, C>;


type BaseExtendMultiPartComponentConfig<T extends StateAndExtraProps, C extends MultiPartTraitConfig<T> = Record<string, Record<string, Record<string, T>>>> = Omit<BaseMultiPartComponentConfig<T, C>, "subComponents">;

type ExtendMultiPartComponentConfigFn<T extends StateAndExtraProps, C extends MultiPartTraitConfig<T> = Record<string, Record<string, Record<string, T>>>> = (theme: ColorTheme, darkMode: boolean) => BaseMultiPartComponentConfig<T, C>;

// type ExtendMultiPartComponentConfig<T extends StateAndExtraProps, C extends MultiPartTraitConfig<T> = Record<string, Record<string, Record<string, T>>>> = BaseExtendMultiPartComponentConfig<T, C> | ExtendMultiPartComponentConfigFn<T, C>;


export interface ExtendMultiPartComponentConfig<P extends Omit<MultiPartComponentConfig<StateAndExtraProps>, "subComponents">>
{
  mode: "extends" | "replace";
  config: P;
}
