/** @jsx jsx */

import { jsx, useTheme } from "@soperio/core";
import React from "react";
import { TileProps } from "./types";



/**
 *
 *
 */
export const Tile = React.forwardRef<HTMLDivElement, TileProps>(({
    children,
    ...props
}: TileProps, ref) =>
{
    const theme = useTheme();

    return (
        <div
            rounded
            bgColor={theme.background1}
            color={theme.textDark1}
            p="3"
            {...props}
            ref={ref}
        >
            {children}
        </div>
    );
});
