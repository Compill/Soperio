import { SoperioComponentConfig } from "./ComponentConfig";
import { ColorTheme } from "@soperio/theming";
import { getThemeStyle } from "@soperio/core";
import { CSSPropKeys } from "@soperio/core";
import { SoperioComponentConfigFn } from "./ComponentConfig";
import { omit, split } from "./utils";
import { IS_DEV } from "@soperio/utils";



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
        return omit(props, CSSPropKeys)
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
        return split(props, CSSPropKeys)
    }

    static components: Record<string, SoperioComponentConfigFn<SoperioComponentConfig>> = {}

    static registerComponent<T extends SoperioComponentConfigFn<SoperioComponentConfig>>(name:string, componentConfig: T)
    {
        this.components[name] = componentConfig
    }

    static getComponentConfig(name: string): SoperioComponentConfigFn<SoperioComponentConfig> | undefined
    {
        // TODO Merge with config from soperio-components.config.ts
        // Do the merge at startup, instead of every time
        // Or maybe cache the result
        return this.components[name]
    }
}
