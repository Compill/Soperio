import { getThemeStyle, useThemeProperty } from "@soperio/react";
import React from 'react';
import { ContainerProps } from "./types";

/**
 *
 *
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ size, center, className, children, ...props }: ContainerProps, ref) =>
{
    const maxW = useThemeProperty("breakpoints", size)
    return (
        <div
            w={!size && "full"}
            maxW={size && maxW}
            mx={center && "auto"}
            {...props}
            ref={ref}>
            {children}
        </div>
    );
});
