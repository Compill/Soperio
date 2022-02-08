import { useColorTheme } from "@soperio/core";
import React from "react";
import { useComponentConfig } from "../hooks/useComponentConfig";
import { useFirstRender } from "../hooks/useFirstRender";
import { Soperio } from "../Soperio";
import defaultConfig from "./config";
import { SelectProps } from "./types";

const COMPONENT_ID = "Soperio.Select";

Soperio.registerComponent(COMPONENT_ID, defaultConfig);

/**
 *
 *
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>((
  {
    size = "md",
    variant = "default",
    corners = "default",
    theme = "default",
    config,
    length,
    children,
    ...props
  }, ref) =>
{
  const firstRender = useFirstRender();

  const styles = useComponentConfig(COMPONENT_ID, theme, config, { variant, size, corners }, props)

  return (
    <select
      transition={firstRender ? "none" : "all"}
      {...(length ? { size: length } : null)}
      {...styles}
      {...props}
      ref={ref}
    >
      {children}
    </select>
  );
});
