/** @jsx jsx */

import React from 'react';
import { jsx, ParentComponent, SoperioComponent } from "@soperio/core";

interface SidebarProps extends SoperioComponent, ParentComponent {
    side?: "left" | "right" | "top" | "bottom",
    closeOnMaskClick?: boolean,
    closeOnEsc?: boolean,
    show?: boolean,
    size?: string,
    onClose?: () => void
}

const DEFAULT_DURATION = "500"
const DEFAULT_EASING = "in"

/**
 *
 *
 */
export function Sidebar({ side = "left", onClose, show, children, ...props }: SidebarProps)
{
    const isX = side === "left" || side === "right"
    const width = isX ? "1/5" : "full";
    const height = isX ? "full" : "1/5";

    const translateX = isX ? (show ? "0": (side === "left" ? "-full" : "full") ) : "0"
    const translateY = !isX ? (show ? "0" : (side === "top" ? "-full" : "full") ) : "0"
    const justify = side === "left" || side === "top" ? "start": "end"

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
            transition="colors"
            easing={props.easing || DEFAULT_EASING}
            duration={props.duration || DEFAULT_DURATION}
            onClick={onClose}
            bgOpacity={show ? 50 : 0}
            dflex
            flexDirection={ isX ? "row" : "column"}
            justifyContent={justify}
            alignContent={justify}
            pointerEvents={show ? "auto" : "none"}
            {...props}
        >
            <div
                w={width}
                h={height}
                bgColor={props.bgColor || "white"} // TODO theme() function to get theme.bg-color-1
                transition="transform"
                transform
                easing={props.easing || DEFAULT_EASING}
                duration={props.duration || DEFAULT_DURATION}
                translateX={translateX}
                translateY={translateY}
            >
                {children}
            </div>
        </div>
    );
}
