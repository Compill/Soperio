import { ColorTheme } from "@soperio/core";

export type SoperioComponentConfig = Record<string, unknown>;

export interface ComponentConfig<T extends SoperioComponentConfig>
{
  mode: "extends" | "replace";
  config: T;
}

export type SoperioComponentConfigFn<T extends SoperioComponentConfig> = (t: ColorTheme) => T;

export type CustomComponentConfigFn<T extends SoperioComponentConfig> = (t:ColorTheme) => ComponentConfig<T>
