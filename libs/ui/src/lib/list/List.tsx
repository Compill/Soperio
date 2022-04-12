import { ComponentManager, ComponentTheme, HTMLUListProps, MultiPartStyleProvider, ParentComponent, SoperioComponent, useFirstRender, useMultiPartComponentConfig, useMultiPartStyles } from "@soperio/components";
import { useColorTheme } from "@soperio/theming";
import { OrString } from "@soperio/utils";
import React from "react";
import { ComponentProps, ExtendConfig } from "./types";
import defaultConfig from "./config"


const COMPONENT_ID = "Soperio.List";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface ListProps extends ComponentProps, ParentComponent, HTMLUListProps {
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
}: ListProps, ref) => {
  const firstRender = useFirstRender();

  const styles = useMultiPartComponentConfig(COMPONENT_ID, theme, config, { variant, corners,size }, props);

  return (

    <ul
      transition={firstRender ? "none" : "all"}

      {...props}
      ref={ref}
      {...styles.list}>
      <MultiPartStyleProvider value={styles}>
        {children}
      </MultiPartStyleProvider>
    </ul>

  );
});

interface ListItemProps extends SoperioComponent,ParentComponent  {
  showBorder?: boolean;
  borderWidth?: OrString<"full" | "padded">;
};

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(({
  showBorder,
  borderWidth,
  children,
  ...props }, ref) => {
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

export interface ListItemIconProps extends ComponentProps, ParentComponent {

  
}

const ListItemIcon = React.forwardRef<HTMLSpanElement, ListItemIconProps>(({

  children,
  ...props }, ref) => {
  const colorTheme = useColorTheme();
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



const ListNamespace = Object.assign(List, { ListItem: ListItem ,ListItemIcon:ListItemIcon});

export { ListNamespace as List };
