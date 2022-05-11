import { useBreakpoint } from "@soperio/theming"
import { SoperioComponent } from "@soperio/theming"

const breakpoints = [ "default", "sm", "md", "lg", "xl", "x2"]

export function useResponsiveProp<T extends SoperioComponent>(responsiveProp: keyof T, soperioProps: T): any
{
    const breakpoint = useBreakpoint() // Get current breakpoint

    let val: T[keyof T] | undefined = undefined

    if (!breakpoint)
    {
        val = soperioProps[responsiveProp]
    }
    else
    {
        const index = breakpoints.indexOf(breakpoint.name)

        for (let i = index; i >= 0; i--)
        {
            const bp = i > 0 ? `${breakpoints[i]}_` : ""

            // eslint-disable-next-line no-prototype-builtins
            if ((soperioProps as any).hasOwnProperty(`${bp}${responsiveProp}`))
            {
                val = (soperioProps as any)[`${bp}${responsiveProp}`]
                break
            }
        }
    }

    // Remove responsive props in case they are passed to another component
    delete (soperioProps as any)[responsiveProp]
    delete (soperioProps as any)[`sm_${responsiveProp}`]
    delete (soperioProps as any)[`md_${responsiveProp}`]
    delete (soperioProps as any)[`lg_${responsiveProp}`]
    delete (soperioProps as any)[`xl_${responsiveProp}`]
    delete (soperioProps as any)[`x2_${responsiveProp}`]

    return val
}

export function useResponsiveProps<T extends SoperioComponent>(responsiveProps: (keyof T)[], soperioProps: T): any[]
{
    const breakpoint = useBreakpoint() // Get current breakpoint

    return responsiveProps.map(prop =>
    {
        let val: T[keyof T] | undefined = undefined

        if (!breakpoint)
        {
            val = soperioProps[prop]
        }
        else
        {
            const index = breakpoints.indexOf(breakpoint.name)

            for (let i = index; i >= 0; i--)
            {
                const bp = i > 0 ? `${breakpoints[i]}_` : ""

                // eslint-disable-next-line no-prototype-builtins
                if ((soperioProps as any).hasOwnProperty(`${bp}${prop}`))
                {
                    val = (soperioProps as any)[`${bp}${prop}`]
                    break
                }
            }
        }

        // // Remove responsive props in case they are passed to another component
        delete (soperioProps as any)[prop]
        delete (soperioProps as any)[`sm_${prop}`]
        delete (soperioProps as any)[`md_${prop}`]
        delete (soperioProps as any)[`lg_${prop}`]
        delete (soperioProps as any)[`xl_${prop}`]
        delete (soperioProps as any)[`x2_${prop}`]

        return val
    })
}
