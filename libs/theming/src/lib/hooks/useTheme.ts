import { ThemeContext } from "@emotion/react"
import { useContext } from "react"
import { Theme } from "../Theme"

export function useTheme<T extends Theme>()
{
    const theme = useContext(ThemeContext as unknown as React.Context<T | undefined>)

    if (!theme)
        throw Error("[Soperio] useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<SoperoiProvider />`")

    return theme as Theme
}