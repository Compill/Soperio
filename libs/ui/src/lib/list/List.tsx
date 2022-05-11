import { ComponentManager, ComponentTheme, HTMLUListProps, MultiPartStyleProvider, ParentComponent, SoperioComponent, useColorTheme, useFirstRender, useMultiPartComponentConfig, useMultiPartStyles } from "@soperio/react";
import { OrString } from "@soperio/utils";
import React from "react";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Soperio.List";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface ListProps extends ComponentProps, ParentComponent, HTMLUListProps
{
  theme?: ComponentTheme;
  config?: ExtendConfig
}

/**
 *
 *
 */
const List = React.forwardRef<HTMLUListElement, ListProps>(({
  variant,
  corners,
  size,
  theme = "default",
  config,
  children,
  ...props
}: ListProps, ref) =>
{
  const firstRender = useFirstRender();
  const styles = useMultiPartComponentConfig(COMPONENT_ID, theme, config, { variant, corners, size }, props);

  return (
    <ul
      transition={firstRender ? "none" : "all"}
      {...styles.list}
      {...props}
      ref={ref}
    >
      <MultiPartStyleProvider value={styles}>
        {children}
      </MultiPartStyleProvider>
    </ul>
  );
});

export interface ListItemProps extends SoperioComponent, ParentComponent
{
  showBorder?: boolean;
  borderWidth?: OrString<"full" | "padded">;
};

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(({
  showBorder,
  borderWidth,
  children,
  ...props }, ref) =>
{
  const colorTheme = useColorTheme();
  const styles = useMultiPartStyles();

  return (
    <li
      ref={ref}
      borderColor={colorTheme.border1}
      borderB={showBorder && borderWidth === "full" ? true : "0"}
      {...styles.listItem}
      {...props}
    >{children}
    </li>
  );
});

export interface ListItemIconProps extends ComponentProps, ParentComponent
{

}

export const ListItemIcon = React.forwardRef<HTMLSpanElement, ListItemIconProps>((
  {
    children,
    ...props
  }, ref) =>
{
  const styles = useMultiPartStyles();

  return (
    <span
      ref={ref}
      {...styles.listItemIcon}
      {...props}
    >
      {children}
    </span>
  );
});

const ListNamespace = Object.assign(List, { ListItem: ListItem, ListItemIcon: ListItemIcon });

export { ListNamespace as List };
