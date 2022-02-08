import { SoperioComponent } from "@soperio/core";
import { ColorTheme } from "@soperio/theming";

// export type SoperioComponentConfig = Record<string, unknown>;
// export interface SoperioComponentConfig<T extends SoperioComponent> {
//   defaultProps?: T,
//   defaultVariants?: [ string: any ]
//   [key: string]: any
// }

// export interface ComponentConfig<T extends SoperioComponent>
// {
//   mode: "extends" | "replace";
//   config: SoperioComponentConfig<T>;
// }

// export type SoperioComponentConfigFn<T extends SoperioComponent> = (theme: ColorTheme, darkMode: boolean) => T;

// export type CustomComponentConfigFn<T extends SoperioComponent> = (theme:ColorTheme, darkMode: boolean) => ComponentConfig<T>


type VariantConfig<T extends SoperioComponent> = {
  [key: string]: { [key: string]: T; };
};


// Basic component config
// We got two reserved keys, defaultProps and defaultVariants
// for applying the logic for setting the defaults automatically
// and then any other key to define a kind of "variant" like variant,
// size, shape, corners, etc...
export type BaseComponentConfig<T extends SoperioComponent, C extends VariantConfig<T> = Record<string, Record<string, T>>> =
  {
    defaultProps?: T,
    defaultVariants?: { [key: string]: string; };
    variants?: C | undefined;
  };


// Same thing bus as a function where user can
// use values from the theme and darkMode
type ComponentConfigFn<T extends SoperioComponent, C extends VariantConfig<T>> = (theme: ColorTheme, darkMode: boolean) => BaseComponentConfig<T, C>;


export type ComponentConfig<T extends SoperioComponent, C extends VariantConfig<T> = Record<string, Record<string, T>>> = BaseComponentConfig<T, C> | ComponentConfigFn<T, C>;


// Custom component config to extends or override the theme's
// component config
export interface ExtendComponentConfig<T extends SoperioComponent, P extends ComponentConfig<T>>
{
  mode: "extends" | "replace";
  config: P;
}

// export type ExtendComponentConfigFn<T extends SoperioComponent> = (theme: ColorTheme, darkMode: boolean) => ComponentConfig<T>



type MultiPartVariantConfig<T extends SoperioComponent> = {
  [key: string]: { [key: string]: { [key: string]: T; }; };
};

export type BaseMultiPartComponentConfig<T extends SoperioComponent, C extends MultiPartVariantConfig<T> = Record<string, Record<string, Record<string, T>>>> =
  {
    defaultProps?: Record<string, T>,
    defaultVariants?: { [key: string]: string; };
    variants?: C | undefined;
    subComponents: string[]
  };

type MultiPartComponentConfigFn<T extends SoperioComponent, C extends MultiPartVariantConfig<T> = Record<string, Record<string, Record<string, T>>>> = (theme: ColorTheme, darkMode: boolean) => BaseMultiPartComponentConfig<T, C>;

export type MultiPartComponentConfig<T extends SoperioComponent, C extends MultiPartVariantConfig<T> = Record<string, Record<string, Record<string, T>>>> = BaseMultiPartComponentConfig<T, C> | MultiPartComponentConfigFn<T, C>;

export interface ExtendMultiPartComponentConfig<T extends SoperioComponent, P extends MultiPartComponentConfig<T>>
{
  mode: "extends" | "replace";
  config: P;
}
