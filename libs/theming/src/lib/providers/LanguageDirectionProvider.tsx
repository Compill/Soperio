import React from "react";
import { createContext } from "../createContext";
import { ParentComponent } from "../SoperioComponent";

type Direction = "ltr" | "rtl"

interface LauguageDirectionProviderProps extends ParentComponent
{
    direction: Direction
}

interface LauguageDirectionContext
{
    direction: boolean,
    setDirection: (direction: boolean) => void
}

const [LDProvider, useDirectionContext] = createContext<LauguageDirectionContext>()

export function LanguageDirectionProvider({ direction: directionProp, children }: LauguageDirectionProviderProps)
{
    const [direction, setDirection] = React.useState(directionProp === "ltr" ? true : false)

    React.useEffect(() => {
        const newDirection = directionProp === "ltr" ? true : false

        if (direction !== newDirection)
            setDirection(directionProp === "ltr" ? true : false)
    }, [directionProp, direction, setDirection ])

    return (
        <LDProvider value={{ direction, setDirection }}>
            {children}
        </LDProvider>
    )
}

export function useDirection()
{
    const { direction } = useDirectionContext()

    return direction
}

export function useSetDirection()
{
    const { setDirection } = useDirectionContext()

    return setDirection
}

export function useToggleDirection()
{
    const { direction, setDirection } = useDirectionContext()

    const toggleDirection = React.useCallback(() => setDirection(!direction), [direction, setDirection])

    return toggleDirection
}