import { useColorTheme } from "@soperio/theming";
import React from "react";
import { useFirstRender } from "@soperio/components";
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
