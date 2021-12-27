/** @jsx jsx */

import React from 'react';
import { jsx, ParentComponent, SoperioComponent, useDirection } from "@soperio/core";
import { useFirstRender } from '../hooks/useFirstRender';
import usePrevious from '../hooks/usePrevious';

interface SidebarProps extends SoperioComponent, ParentComponent
{
    side?: "start" | "end" | "top" | "bottom",
    closeOnMaskClick?: boolean,
    closeOnEsc?: boolean,
    show: boolean,
    size?: string,
    onClose?: () => void
}

const DEFAULT_DURATION = "500"
const DEFAULT_EASING = "in"

/**
 *
 *
 */
export function Sidebar({ side = "start", onClose, show = false, children, ...props }: SidebarProps)
{
    const [internalShow, setInternalShow] = React.useState(false)
    const previousSide = usePrevious(side)

    const firstRender = useFirstRender();
    const direction = useDirection()

    const isX = side === "start" || side === "end"
    const width = isX ? "1/5" : "full";
    const height = isX ? "full" : "1/5";

    const startDirection = (side === "start" && direction) || (side === "end" && !direction)
    console.log("sidebar start direction", startDirection)
    console.log("sidebar isX", isX)

    const translateX = isX ? (show ? "0" : startDirection ? "-full" : "full") : "0"
    const translateY = !isX ? (show ? "0" : (side === "top" ? "-full" : "full")) : "0"
    const initTranslateX = isX ? (startDirection ? "-full" : "full") : "0"
    const initTranslateY = !isX ? (side === "top" ? "-full" : "full") : "0"
    const justify = startDirection || side === "top" ? "start" : "end"

    React.useEffect(() =>
    {
        if (show !== internalShow)
            setInternalShow(show);
    }, [show, internalShow, setInternalShow])

    // TODO This is not working when changing side
    // See https://github.com/DouyinFE/semi-design/blob/main/packages/semi-animation-react/src/Transition.tsx
    // https://github.com/DouyinFE/semi-design/blob/main/packages/semi-ui/sideSheet/SideSheetTransition.tsx
    // For a Transition component

    return (
        <div
            z="1000"
            w="screen"
            h="screen"
            position="absolute"
            overflow="hidden"
            inset="0"
            bgColor="black"
            transition={firstRender ? "none" : "colors"}
            easing={props.easing || DEFAULT_EASING}
            duration={props.duration || DEFAULT_DURATION}
            onClick={onClose}
            bgOpacity={internalShow ? 50 : 0}
            dflex
            flexDirection={isX ? "row" : "column"}
            justifyContent={justify}
            alignContent={justify}
            pointerEvents={show ? "auto" : "none"}
            {...props}
        >
            <div
                w={width}
                h={height}
                bgColor={props.bgColor || "white"} // TODO theme() function to get theme.bg-color-1
                transition={firstRender || side === previousSide ? "transform" : "none"}
                transform
                easing={props.easing || DEFAULT_EASING}
                duration={props.duration || DEFAULT_DURATION}
                translateX={side === previousSide ? translateX : initTranslateX}
                translateY={side === previousSide ? translateY : initTranslateY}
            >
                {children}
            </div>
        </div>
    );
}
