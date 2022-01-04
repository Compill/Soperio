/** @jsx jsx */
/** @jsxFrag jsx */

import { jsx } from "@soperio/react";
import { ParentComponent, SoperioComponent, useColorTheme } from "@soperio/core";
import { SpacingPositive } from "@soperio/theming";
import { IS_DEV, OrString } from "@soperio/utils";
import React from "react";
import { useComponentConfig } from "../hooks/useComponentConfig";
import { useFirstRender } from "../hooks/useFirstRender";
import { Soperio } from "../Soperio";
import defaultConfig from "./config";
import { CardProps } from "./types";

const COMPONENT_ID = "Soperio.Card";

Soperio.registerComponent(COMPONENT_ID, defaultConfig);

/**
 *
 *
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(({
  variant = "default",
  corners = "default",
  theme = "default",
  config,
  children,
  ...props
}: CardProps, ref) =>
{
  const firstRender = useFirstRender();
  const colorTheme = useColorTheme(theme);

  const styles = useComponentConfig(COMPONENT_ID, colorTheme, config);
  const sVariant = styles.variant?.[variant];
  const sCorners = styles.corners?.[corners];

  if (!sVariant && IS_DEV)
    console.log(`[Soperio Card Component]: variant ${variant} does not exist in your theme/config`);

  return (
    <div
      transition={firstRender ? "none" : "all"}
      {...sVariant}
      {...sCorners}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  );
});

interface CardHeaderProps extends SoperioComponent, ParentComponent
{
  showBorder?: boolean;
  borderWidth?: OrString<"full" | "padded">;
};

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({
  showBorder,
  borderWidth,
  children,
  ...props }, ref) =>
{
  const colorTheme = useColorTheme();

  return (
    // Style should be flex with space between children
    // So that we get title + fill space + toolbar/more button
    <React.Fragment>
      <div px="7" py="3" {...props} ref={ref} borderColor={colorTheme.border1} borderB={showBorder && borderWidth === "full" ? true : "0"}>
        {children}
      </div>
      {showBorder && borderWidth !== "full" && <div borderT borderColor={colorTheme.border1} mx={borderWidth === "padded" ? "7" : borderWidth as SpacingPositive} />}
    </React.Fragment>
  );
});

interface CardBodyProps extends SoperioComponent, ParentComponent
{
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

interface CardFooterProps extends SoperioComponent, ParentComponent
{
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
  const colorTheme = useColorTheme();

  return (
    // Style should be flex with space between children
    // So that we get title + fill space + toolbar/more button
    <React.Fragment>
      {showBorder && borderWidth !== "full" && <div borderT borderColor={colorTheme.border1} mx={borderWidth === "padded" ? "7" : borderWidth as SpacingPositive} />}
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
