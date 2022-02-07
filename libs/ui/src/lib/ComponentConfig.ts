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
  [key: string]: { [key:string]: T}
}


// Basic component config
// We got two reserved keys, defaultProps and defaultVariants
// for applying the logic for setting the defaults automatically
// and then any other key to define a kind of "variant" like variant,
// size, shape, corners, etc...
type BaseComponentConfig<T extends SoperioComponent, C extends VariantConfig<T> = Record<string, Record<string, T>>> =
{
  defaultProps?: T,
  defaultVariants?: { [key: string]: string; };
  variants?: C | undefined //{ [key: string]: T; }
}


// Same thing bus as a function where user can
// use values from the theme and darkMode
type ComponentConfigFn<T extends SoperioComponent, C extends VariantConfig<T>> = (theme: ColorTheme, darkMode: boolean) => ComponentConfig<T, C>;


export type ComponentConfig<T extends SoperioComponent, C extends VariantConfig<T> = Record<string, Record<string, T>>> = BaseComponentConfig<T, C> | ComponentConfigFn<T, C>


// Custom component config to extends or override the theme's
// component config
export interface ExtendComponentConfig<T extends SoperioComponent, P extends ComponentConfig<T>>
{
  mode: "extends" | "replace";
  config: P;
}

// export type ExtendComponentConfigFn<T extends SoperioComponent> = (theme: ColorTheme, darkMode: boolean) => ComponentConfig<T>
