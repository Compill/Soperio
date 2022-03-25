import { ComponentManager, ComponentTheme, ParentComponent, useComponentConfig, useFirstRender } from "@soperio/react";
import React from "react";
import { ComponentProps, ExtendConfig } from "./types";
import defaultConfig from "./config";

const COMPONENT_ID = "Soperio.Divider";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface DividerProps extends ComponentProps {
  theme?: ComponentTheme,
  config?: ExtendConfig;
}

/**
 *
 *
 */
export const Divider = React.forwardRef<HTMLHRElement,DividerProps>(({
  variant = "default",
  theme = "default",
  orientation,
  config,
  ...props
}: DividerProps, ref) => {
  const firstRender = useFirstRender();

  const styles = useComponentConfig(COMPONENT_ID, theme, config, { variant,orientation }, props);
  return (
    <hr
    
    transition={firstRender ? "none" : "all"}
      {...styles}
      {...props}
      ref={ref} />

  );
});
