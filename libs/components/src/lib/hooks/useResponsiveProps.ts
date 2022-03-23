import React from "react"
import { SoperioComponent } from "../SoperioComponent"

interface UseResponsivePropsProps<T extends SoperioComponent>
{
    responsiveProps: string | string[],
    soperioProps: T
}

function useResponsiveProps<T extends SoperioComponent>({ responsiveProps, soperioProps }: UseResponsivePropsProps<T>): any | any[]
{
    const breakpoints = useBreakpoints() // Get all breakpoints
    const breakpoint = useBreakpoint() // Get current breakpoint

    if (typeof responsiveProps === "string")
    {
        // Démerde toi pour récupérer la bonne valeur en fonction du breakpoint
        // donc il faut tester soperioProps[responsiveProps], soperioProps[`breakpoints[0]_responsiveProps`], soperioProps[`breakpoints[1]_responsiveProps`], ...

        return ""
    }

    return 0
}

function useBreakpoints()
{
    // get breakpoints from theme
    return []
}

function useBreakpoint()
{
    const breakpoints = useBreakpoints()
    const [width, setWidth] = React.useState(window.outerWidth)

    const listener = React.useCallback(() => {
        console.log("hello")
    }, [])


    React.useEffect(() => {
        window.addEventListener("onSizeChange", listener)

        return window.removeEventListener("onSizeChange", listener)
    }, [listener])

    
    const breakpoint = getBreakpoint(width, breakpoints)

    return breakpoint
}

function getBreakpoint(width: number, breakpoints: any[]):any
{
    // This is where the real shit happens

    return 0
}


/*



*/