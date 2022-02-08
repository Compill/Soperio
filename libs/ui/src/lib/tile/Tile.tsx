import { useColorTheme } from "@soperio/core";
import React from "react";
import { useFirstRender } from "../hooks/useFirstRender";
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
    const firstRender = useFirstRender();
    const theme = useColorTheme();

    return (
        <div
            transition={firstRender ? "none" : "all"}
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
