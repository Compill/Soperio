/** @jsx jsx */
/** @jsxFrag jsx */

import { jsx, ParentComponent, SoperioComponent, SpacingPositiveScale, useTheme } from "@soperio/core";
import React from "react";
import config from "./config";
import { getStyledConfig } from "../utils";
import { CardConfig, CardProps } from "./types";
import { IS_DEV, OrString } from "@soperio/utils";

/**
 *
 *
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(({
    variant = "default",
    corners = "default",
    children,
    ...props
}: CardProps, ref) =>
{
    const colorTheme = useTheme();

    const styles: CardConfig = getStyledConfig(colorTheme, config, "Button");
    const sVariant = styles.variant?.[variant];
    const sCorners = styles.corners?.[corners];

    if (!sVariant && IS_DEV)
        console.log(`[Soperio Card Component]: variant ${variant} does not exist in your theme/config`);

    return (
        <div
            {...sVariant}
            {...sCorners}
            {...props}
            ref={ref}
        >
            {children}
        </div>
    );
});

interface CardHeaderProps extends SoperioComponent, ParentComponent {
    showBorder?: boolean;
    borderWidth?: OrString<"full" | "padded">;
};

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({
    showBorder,
    borderWidth,
    children,
    ...props }, ref) =>
{
    const colorTheme = useTheme();

    return (
        // Style should be flex with space between children
        // So that we get title + fill space + toolbar/more button
        <React.Fragment>
            <div px="7" py="3" {...props} ref={ref} borderColor={colorTheme.border1} borderB={showBorder && borderWidth === "full" ? true : "0"}>
                {children}
            </div>
            {showBorder && borderWidth !== "full" && <div borderT borderColor={colorTheme.border1} mx={borderWidth === "padded" ? "7" : borderWidth as SpacingPositiveScale} />}
        </React.Fragment>
    );
});

interface CardBodyProps extends SoperioComponent, ParentComponent {
    scrollable?: boolean, // If fixed height
};

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(({ children, ...props }, ref) =>
{
    return (
        <div px="7" py="5" fontSize="sm" {...props} ref={ref}>
            {children}
        </div>
    );
});

interface CardFooterProps extends SoperioComponent, ParentComponent {
    showBorder?: boolean;
    borderWidth?: OrString<"full" | "padded">;
    align?: "right" | "left" | "center";
};

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({
    showBorder,
    borderWidth,
    children,
    ...props }, ref) =>
{
    const colorTheme = useTheme();

    return (
        // Style should be flex with space between children
        // So that we get title + fill space + toolbar/more button
        <React.Fragment>
            {showBorder && borderWidth !== "full" && <div borderT borderColor={colorTheme.border1} mx={borderWidth === "padded" ? "7" : borderWidth as SpacingPositiveScale} />}
            <div px="7" py="3" {...props} ref={ref} borderColor={colorTheme.border1} borderT={showBorder && borderWidth === "full" ? true : "0"}>
                {children}
            </div>
        </React.Fragment>
    );
});


const CardNamespace = Object.assign(Card, { Header: CardHeader, Body: CardBody, Footer: CardFooter });

export { CardNamespace as Card };

// CardTitle : icon + title + subtitle, stack = vertical or horizontal
// Card Toolbar
// Card More menu

// CardTabMenu => nav menu
// CardTabbedContent => content from nav menu, with animation transition

// Toggle cardbody/ Default collapsed

// Loading state

// Sticky card header (no idea how to do this)


// Tile component : just a simple rounded white bg card with default padding
