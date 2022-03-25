import { ComponentManager, ComponentTheme, HTMLTextAreaProps, useComponentConfig, useFirstRender } from "@soperio/react";
import React from "react";
import { ComponentProps, ExtendConfig } from "./types";

import defaultConfig from "./config";

const COMPONENT_ID = "Soperio.TextArea";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface TextAreaProps extends ComponentProps, HTMLTextAreaProps
{
  theme?: ComponentTheme,
  config?: ExtendConfig
}

/**
 *
 *
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((
  {
    size = "md",
    variant = "default",
    corners = "default",
    theme = "default",
    config,
    ...props
  }, ref) =>
{
  const firstRender = useFirstRender();

  const styles = useComponentConfig(COMPONENT_ID, theme, config, { variant, size, corners }, props)

  return (
    <textarea
      transition={firstRender ? "none" : "all"}
      {...styles}
      {...props}
      ref={ref}
    />
  );
});
