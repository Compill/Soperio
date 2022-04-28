import { ComponentManager, ComponentTheme, HTMLDivProps, MultiPartStyleProvider, ParentComponent, SoperioComponent, useFirstRender, useMultiPartComponentConfig, useMultiPartStyles } from "@soperio/react";
import { SpacingPositive, useColorTheme } from "@soperio/react";
import { OrString } from "@soperio/react";
import React from "react";
import { ComponentProps, ExtendConfig } from "./types";
import defaultConfig from "./config"
import { IS_DEV } from "@soperio/utils"

const COMPONENT_ID = "Soperio.Card";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface CardProps extends ComponentProps, ParentComponent, HTMLDivProps
{
  theme?: ComponentTheme;
  config?: ExtendConfig
}

/**
 *
 *
 */
const CardContainer = React.forwardRef<HTMLDivElement, CardProps>(({
  variant,
  corners,
  theme = "default",
  config,
  children,
  ...props
}: CardProps, ref) =>
{
  const firstRender = useFirstRender();

  const styles = useMultiPartComponentConfig(COMPONENT_ID, theme, config, { variant, corners }, props);
  
  return (
    <div
      transition={firstRender ? "none" : "all"}
      {...styles.card}
      {...props}
      ref={ref}
    >
      <MultiPartStyleProvider value={styles}>
        {children}
      </MultiPartStyleProvider>
    </div>
  );
});

export interface CardHeaderProps extends SoperioComponent, ParentComponent
{
  showBorder?: boolean;
  borderWidth?: OrString<"full" | "padded">;
};

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({
  showBorder,
  borderWidth,
  children,
  ...props }, ref) =>
{
  const colorTheme = useColorTheme();
  const styles = useMultiPartStyles();

  return (
    // Style should be flex with space between children
    // So that we get title + fill space + toolbar/more button
    <>
      <div
        px="7"
        py="3"
        ref={ref}
        borderColor={colorTheme.border1}
        borderB={showBorder && borderWidth === "full" ? true : "0"}
        {...styles.header}
        {...props}
      >
        {children}
      </div>
      {showBorder && borderWidth !== "full" && <div borderT borderColor={colorTheme.border1} mx={borderWidth === "padded" ? "7" : borderWidth as SpacingPositive} />}
    </>
  );
});

export interface CardBodyProps extends SoperioComponent, ParentComponent
{
  scrollable?: boolean, // If fixed height
};

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(({ children, ...props }, ref) =>
{
  const styles = useMultiPartStyles();

  return (
    <div px="7" py="5" fontSize="sm" {...styles.body} {...props} ref={ref}>
      {children}
    </div>
  );
});

export interface CardFooterProps extends SoperioComponent, ParentComponent
{
  showBorder?: boolean;
  borderWidth?: OrString<"full" | "padded">;
  align?: "right" | "left" | "center";
};

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({
  showBorder,
  borderWidth,
  children,
  ...props }, ref) =>
{
  const colorTheme = useColorTheme();
  const styles = useMultiPartStyles();

  return (
    // Style should be flex with space between children
    // So that we get title + fill space + toolbar/more button
    <React.Fragment>
      {showBorder && borderWidth !== "full" && <div borderT borderColor={colorTheme.border1} mx={borderWidth === "padded" ? "7" : borderWidth as SpacingPositive} />}
      <div
        px="7"
        py="3"
        ref={ref}
        borderColor={colorTheme.border1}
        borderT={showBorder && borderWidth === "full" ? true : "0"}
        {...styles.footer}
        {...props}
      >
        {children}
      </div>
    </React.Fragment>
  );
});

export const Card = Object.assign(CardContainer, { Header: CardHeader, Body: CardBody, Footer: CardFooter });

if (IS_DEV)
  Card.displayName = "Soperio Card"
else
  Card.displayName = "Card"

// CardTitle : icon + title + subtitle, stack = vertical or horizontal
// Card Toolbar
// Card More menu

// CardTabMenu => nav menu
// CardTabbedContent => content from nav menu, with animation transition

// Toggle cardbody/ Default collapsed

// Loading state

// Sticky card header (no idea how to do this)


// Tile component : just a simple rounded white bg card with default padding
