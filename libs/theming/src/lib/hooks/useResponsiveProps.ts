import { useBreakpoint } from "@soperio/theming"
import { SoperioComponent } from "@soperio/theming"

const breakpoints = ["default", "sm", "md", "lg", "xl", "x2"]

export function useResponsiveProp<T extends SoperioComponent>(responsiveProp: keyof T, soperioProps: T): any
{
  const breakpoint = useBreakpoint() // Get current breakpoint

  const prop = responsiveProp as string

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
      if ((soperioProps as any).hasOwnProperty(`${bp}${prop}`))
      {
        val = (soperioProps as any)[`${bp}${prop}`]
        break
      }
    }
  }

  // Remove responsive props in case they are passed to another component
  delete (soperioProps as any)[prop]
  delete (soperioProps as any)[`sm_${prop}`]
  delete (soperioProps as any)[`md_${prop}`]
  delete (soperioProps as any)[`lg_${prop}`]
  delete (soperioProps as any)[`xl_${prop}`]
  delete (soperioProps as any)[`x2_${prop}`]

  return val
}

export function useResponsiveProps<T extends SoperioComponent>(responsiveProps: (keyof T)[], soperioProps: T): any[]
{
  const breakpoint = useBreakpoint() // Get current breakpoint

  return responsiveProps.map(prop =>
  {
    const p = prop as string
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
        if ((soperioProps as any).hasOwnProperty(`${bp}${p}`))
        {
          val = (soperioProps as any)[`${bp}${p}`]
          break
        }
      }
    }

    // // Remove responsive props in case they are passed to another component
    delete (soperioProps as any)[p]
    delete (soperioProps as any)[`sm_${p}`]
    delete (soperioProps as any)[`md_${p}`]
    delete (soperioProps as any)[`lg_${p}`]
    delete (soperioProps as any)[`xl_${p}`]
    delete (soperioProps as any)[`x2_${p}`]

    return val
  })
}
