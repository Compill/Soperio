// import React from "react";

// interface DarkModeContextType
// {
//     darkMode: "light" | "dark" | "system";
//     toggleDarkMode: () => void,
//     setDarkMode: (darkMode: boolean) => void
// }

// const DarkModeContext = React.createContext<DarkModeContextType>({} as DarkModeContextType)

// export function useDarkMode()
// {
//     const context = React.useContext(DarkModeContext)

//     if (!context)
//         throw new Error("[Soperio Theming] You forgot to wrap your app with <SoperioProvider>")

//     const { darkMode } = context

//     return darkMode
// }

// export function useToggleDarkMode()
// {
//     const context = React.useContext(DarkModeContext)

//     if (!context)
//         throw new Error("[Soperio Theming] You forgot to wrap your app with <SoperioProvider>")

//     const { setDarkMode } = context

//     return darkMode
// }

// // We could extend from ParentComponent but we would have a circular
// // dependency with components library
// interface DarkModeProviderProps
// {
//     darkMode: "light" | "dark" | "system",
//     children?: React.ReactNode
// }

// export function DarkModeProvider({ darkMode, children } : DarkModeProviderProps)
// {
//     const [colorMode, setColorMode] = React.useState(darkMode)

//     React.useEffect(() =>
//     {
//         //
//     }, [colorMode])

//     const setDarkMode = React.useCallback((darkMode: boolean) => setColorMode(darkMode), [setColorMode])

//     const context = React.useMemo(() => (
//         {
//             colorMode: (value ?? colorMode) as ColorMode,
//             toggleDarkMode: value ? noop : toggleColorMode,
//             setDardMode: value ? noop : setColorMode,
//         }),
//         [colorMode, setColorMode, toggleColorMode, value],
//     )

//     return (
//         <DarkModeContext.Provider value={context}>
//             {children}
//         </DarkModeContext.Provider>
//     )
// }