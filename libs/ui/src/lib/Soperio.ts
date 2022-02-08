import { CSSPropKeys, getThemeStyle, SoperioComponent } from "@soperio/core";
import { ColorTheme } from "@soperio/theming";
import { IS_DEV } from "@soperio/utils";
import { MultiPartComponentConfig } from "..";
import { ComponentConfig } from "./ComponentConfig";
import { omit, split } from "./utils";

export class Soperio
{
  static getColorTheme(theme: string | ColorTheme, component = ""): ColorTheme | null
  {
    if (typeof theme === "string")
    {
      const indexedColorTheme = getThemeStyle("themes", theme) as ColorTheme;

      if (!indexedColorTheme)
      {
        if (IS_DEV)
          console.log(`[Soperio ${component}]: the color theme ${theme} does not exist in your theme.`);

        return null;
      }

      return indexedColorTheme;
    }

    return theme;
  }

  /**
   * Returns all props that are not base Soperio props (like bgColor, m, hover_xx, ...)
   *
   * @param props
   * @returns props without Soperio props
   */
  static omitComponentProps(props: Record<string, any>): Record<string, any>
  {
    return omit(props, CSSPropKeys);
  }

  /**
   * Returns an array of two prop objects
   * [0] contains Soperio props (like bgColor, m, hover_xx, ...)
   * [1] contains non-Soperio props
   * @param props
   * @returns
   */
  static splitComponentProps(props: Record<string, any>): Record<string, any>[]
  {
    return split(props, CSSPropKeys);
  }

  static components: Record<string, ComponentConfig<SoperioComponent> | MultiPartComponentConfig<SoperioComponent>> = {};

  static registerComponent<T extends SoperioComponent, C extends ComponentConfig<T> | MultiPartComponentConfig<T>>(name: string, componentConfig: C)
  {
    this.components[name] = componentConfig;
  }

  static getComponentConfig(name: string): ComponentConfig<SoperioComponent> | MultiPartComponentConfig<SoperioComponent> | undefined
  {
    // TODO Merge with config from soperio-components.config.ts
    // Do the merge at startup, instead of every time
    // Or maybe cache the result
    return this.components[name];
  }
}
