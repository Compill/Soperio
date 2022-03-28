import { getThemeStyle, useResponsiveProp } from "@soperio/react";
import React from 'react';
import { StackProps } from "./types";

/**
 *
 *
 */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(({ size, center, direction = "column", className, children, ...props }: StackProps, ref) =>
{
    const _props = { ...props, direction }
    const responsiveDirection = useResponsiveProp("direction", _props)

    console.log("stack, direction", responsiveDirection)

    return (
        <div
            w={!size && "full"}
            maxW={size && getThemeStyle("breakpoints", size)}
            mx={center && "auto"}
            display="flex"
            flexDirection={responsiveDirection}
            {..._props}
            ref={ref}>
            {children}
        </div>
    );
});
