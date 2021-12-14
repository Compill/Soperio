/** @jsx jsx */

import { jsx, useColorTheme } from "@soperio/core";
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
    const theme = useColorTheme();

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
