import { IS_DEV } from "@soperio/utils";
import React from "react";
import { createContext } from "../createContext";
import { useTheme } from "../hooks/useTheme";
import { ParentComponent } from "../SoperioComponent";
import { Theme } from "../Theme";
import { RootColors } from "../ThemeTypes";
import { transformColorToGlobalVar } from "../utils/colorUtils";
import { getThemeStyle } from "../utils/getThemeStyle";

type DarkModeConfig = "light" | "dark" | "system";

interface DarkModeProviderProps extends ParentComponent
{
    darkModeConfig: DarkModeConfig
}

interface DarkModeContext
{
    darkMode: boolean,
    setDarkMode: (darkMode: boolean) => void
}

function isSystemDark()
{
    const mediaQueryList = window.matchMedia?.("(prefers-color-scheme: dark)");

    if (!mediaQueryList)
        return undefined;
    
    return !!mediaQueryList.media === mediaQueryList.matches;
}

const [DMP, useDarkModeContext] = createContext<DarkModeContext>()

export function DarkModeProvider({ darkModeConfig, children }: DarkModeProviderProps)
{
    const [darkMode, setDarkMode] = React.useState(darkModeConfig === "dark" ? true : darkModeConfig === "light" ? false : (isSystemDark() || false))

    return (
        <DMP value={{darkMode, setDarkMode}}>
            <DarkModeManager />
            {children}
        </DMP>
    )
}

export function useDarkMode()
{
    const { darkMode } = useDarkModeContext()

    return darkMode
}

export function useSetDarkMode()
{
    const { setDarkMode } = useDarkModeContext()

    return setDarkMode
}

export function useToggleDarkMode()
{
    const { darkMode, setDarkMode } = useDarkModeContext()

    const toggleDarkMode = React.useCallback(() => setDarkMode(!darkMode), [darkMode, setDarkMode])

    return toggleDarkMode
}

function DarkModeManager()
{
    const darkMode = useDarkMode()
    const theme = useTheme()

    React.useEffect(() => {
        replaceRootColors(darkMode, theme)
    }, [darkMode, theme])

    return null
}

function replaceRootColors(darkMode: boolean, theme: Theme)
{
    const ROOT_COLORS_STYLE_ID = "soperio-root-colors";

    if (!theme.rootColors && IS_DEV)
        console.warn("[Soperio Core]: Your theme is invalid and is missing the \"rootColors\" property object");

    const rootColors: RootColors = { ...theme.rootColors, ...(darkMode ? theme.darkModeOverride?.rootColors : null) };

    let css = ":root {\n";

    for (const cssVar in rootColors)
    {
        const color: string = rootColors[cssVar] as string;

        let parsedColor = getThemeStyle(theme, "colors", color) || color;

        parsedColor = transformColorToGlobalVar(parsedColor);

        if (parsedColor)
            css += `\t--so-${cssVar}: ${parsedColor};\n`;
    }

    // Filters default vars
    css += `\t--so-filter-blur: ;\n`;
    css += `\t--so-filter-brightness: ;\n`;
    css += `\t--so-filter-contrast: ;\n`;
    css += `\t--so-filter-drop-shadow: ;\n`;
    css += `\t--so-filter-grayscale: ;\n`;
    css += `\t--so-filter-hue-rotate: ;\n`;
    css += `\t--so-filter-invert: ;\n`;
    css += `\t--so-filter-saturate: ;\n`;
    css += `\t--so-filter-sepia: ;\n`;

    css += `\t--so-backdrop-filter-blur: ;\n`;
    css += `\t--so-backdrop-filter-brightness: ;\n`;
    css += `\t--so-backdrop-filter-contrast: ;\n`;
    css += `\t--so-backdrop-filter-grayscale: ;\n`;
    css += `\t--so-backdrop-filter-hue-rotate: ;\n`;
    css += `\t--so-backdrop-filter-invert: ;\n`;
    css += `\t--so-backdrop-filter-opacity: ;\n`;
    css += `\t--so-backdrop-filter-saturate: ;\n`;
    css += `\t--so-backdrop-filter-sepia: ;\n`;

    css += "}";

    const canUseDOM = !!(
        typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement
    );

    // If Soperio is used Server-Side (Next/Gatsby/...)
    // document is not available so wait until the code
    // is rendered on the client side
    if (canUseDOM)
    {
        // Inserting style tag with root colors
        // removing existing if any
        const existingStyleTag = document.getElementById(ROOT_COLORS_STYLE_ID);

        if (existingStyleTag != null)
            document.head.removeChild(existingStyleTag);

        const styleEl = document.createElement("style");
        styleEl.id = ROOT_COLORS_STYLE_ID;
        styleEl.appendChild(document.createTextNode(""));
        styleEl.innerHTML = css;
        document.head.appendChild(styleEl);
    }
}