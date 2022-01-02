/** @jsx jsx */

import { getThemeStyle, jsx, ParentComponent, SoperioComponent } from "@soperio/core";
import { Breakpoints } from "@soperio/theming";
import React from 'react';

interface ContainerProps extends SoperioComponent, ParentComponent, React.HTMLAttributes<HTMLDivElement>
{
    breakpoint?: Breakpoints;
    center?: true | false | "sm" | "md" | "lg" | "xl" | "xxl";
};

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
