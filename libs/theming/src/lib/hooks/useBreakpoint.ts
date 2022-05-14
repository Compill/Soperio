import React from "react"
// TODO use env
// import { useEnvironment } from "@chakra-ui/react-env"
import { useTheme } from "./useTheme"

/**
 * React hook used to get the current responsive media breakpoint.
 *
 * @param [defaultBreakpoint="default"] default breakpoint name
 * (in non-window environments like SSR)
 *
 * For SSR, you can use a package like [is-mobile](https://github.com/kaimallea/isMobile)
 * to get the default breakpoint value from the user-agent
 */
export function useBreakpoint(
    defaultBreakpoint = "default", // default value ensures SSR+CSR consistency
)
{
    const { breakpoints } = useTheme()
    // const env = useEnvironment()

    const queries = React.useMemo(() =>
    {
        const a: any[] = []
        const size = Object.keys(breakpoints).length
        const entries = Object.entries(breakpoints)

        entries.forEach(([key, value], index) =>
        {
            a.push({
                breakpoint: {
                    name: key,
                    value: value
                },
                query: `(min-width: ${value}) ${index < size - 1 ? `and (max-width: calc(${entries[index + 1][1]} - 1px))` : ""}`
            })
        })
        return a
    }, [ breakpoints ])

    const [currentBreakpoint, setCurrentBreakpoint] = React.useState(() =>
    {
        if (defaultBreakpoint)
        {
            // use default breakpoint to ensure render consistency in SSR + CSR environments
            // => first render on the client has to match the render on the server
            const fallbackBreakpoint = queries.find(
                ({ breakpoint }) => breakpoint.name === defaultBreakpoint,
            )

            if (fallbackBreakpoint)
                return fallbackBreakpoint.breakpoint
        }

        if (/*env.*/window.matchMedia)
        {
            // set correct breakpoint on first render if no default breakpoint was provided
            const matchingBreakpoint = queries.find(
                ({ query }) => /*env.*/window.matchMedia(query).matches,
            )

            if (matchingBreakpoint)
                return matchingBreakpoint.breakpoint
        }

        return undefined
    })

    React.useEffect(() =>
    {
        const allUnregisterFns = queries.map(({ breakpoint, query }) =>
        {
            const mediaQueryList = /*env.*/window.matchMedia(query)

            if (mediaQueryList.matches)
                setCurrentBreakpoint(breakpoint)

            const handleChange = (ev: MediaQueryListEvent) =>
            {
                if (ev.matches)
                    setCurrentBreakpoint(breakpoint)
            }

            // add media query listener
            if (typeof mediaQueryList.addEventListener === "function")
                mediaQueryList.addEventListener("change", handleChange)
            else
                mediaQueryList.addListener(handleChange)

            // return unregister fn
            return () =>
            {
                if (typeof mediaQueryList.removeEventListener === "function")
                    mediaQueryList.removeEventListener("change", handleChange)
                else
                    mediaQueryList.removeListener(handleChange)
            }
        })

        return () =>
        {
            allUnregisterFns.forEach((unregister) => unregister())
        }
    }, [queries, breakpoints/*, env.window*/])

    return currentBreakpoint
}
