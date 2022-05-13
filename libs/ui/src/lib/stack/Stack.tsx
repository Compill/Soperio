import { useResponsiveProp } from "@soperio/react";
import React from 'react';
import { StackProps } from "./types";

/**
 *
 *
 */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(({ direction = "column", className, children, ...props }: StackProps, ref) =>
{
    const _props = { ...props, direction }
    const responsiveDirection = useResponsiveProp("direction", _props)

    return (
        <div
            display="flex"
            flexDirection={responsiveDirection}
            {..._props}
            ref={ref}>
            {children}
        </div>
    );
});
