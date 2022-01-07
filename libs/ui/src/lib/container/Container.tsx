import { getThemeStyle } from "@soperio/core";
import React from 'react';
import { ContainerProps } from "./types";

/**
 *
 *
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ breakpoint, center, className, children, ...props }: ContainerProps, ref) =>
{
    return (
        <div
            w={!breakpoint && "full"}
            maxW={breakpoint && getThemeStyle("breakpoints", breakpoint)}
            mx={center && "auto"}
            {...props}
            ref={ref}>
            {children}
        </div>
    );
});
