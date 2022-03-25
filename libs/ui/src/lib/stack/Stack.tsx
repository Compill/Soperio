import { getThemeStyle } from "@soperio/react";
import React from 'react';
import { StackProps } from "./types";

/**
 *
 *
 */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(({ size, center, className, children, ...props }: StackProps, ref) =>
{
    return (
        <div
            w={!size && "full"}
            maxW={size && getThemeStyle("breakpoints", size)}
            mx={center && "auto"}
            display="flex"
            {...props}
            ref={ref}>
            {children}
        </div>
    );
});
