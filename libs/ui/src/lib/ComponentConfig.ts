import { ColorTheme } from "@soperio/core";

export type SoperioComponentConfig = Record<string, unknown>;

export interface ComponentConfig<T extends SoperioComponentConfig>
{
  mode: "extends" | "replace";
  config: T;
}

export type SoperioComponentConfigFn<T extends SoperioComponentConfig> = (theme: ColorTheme, darkMode: boolean) => T;

export type CustomComponentConfigFn<T extends SoperioComponentConfig> = (theme:ColorTheme, darkMode: boolean) => ComponentConfig<T>
