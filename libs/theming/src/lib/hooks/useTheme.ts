import React from "react";
import { defaultTheme } from "../defaultTheme";
import { Theme } from "../Theme";

interface ThemeListener
{
    (theme: Theme): void;
}

let themeInternal = defaultTheme;
const listeners: ThemeListener[] = [];

// For usage in color props, in this library only
export function getTheme(): Theme
{
    return themeInternal;
}

function setThemeInternal(theme: Theme)
{
    if (themeInternal !== theme)
    {
        themeInternal = theme;
        listeners.forEach(item => item(themeInternal));
    }
}

function addListener(listener: ThemeListener)
{
    listeners.push(listener);
}

function removeListener(listener: ThemeListener)
{
    const index = listeners.indexOf(listener);

    if (index > -1)
        listeners.splice(index, 1);

}

export function useTheme()
{
    const [theme, setTheme] = React.useState(themeInternal);
    const cb = React.useCallback((theme) => setTheme(theme), [setTheme]);

    React.useEffect(() =>
    {
        addListener(cb);

        return () =>
        {
            removeListener(cb);
        };
    }, [cb]);

    return theme;
}

export function useSetTheme()
{
    const cb = React.useCallback((theme) => setThemeInternal(theme), []);

    return cb;
}
