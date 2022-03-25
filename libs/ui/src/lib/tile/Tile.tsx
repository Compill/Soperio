import { useColorTheme, useFirstRender } from "@soperio/react";
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
