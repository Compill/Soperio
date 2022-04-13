import { ComponentManager, ComponentTheme, SoperioComponent, useColor, useComponentConfig, useFirstRender } from "@soperio/react";
import React from "react";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Soperio.Spinner"

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

function getBorders(trackColor: string, progress: number): SoperioComponent
{
  return {
    borderTColor: progress > 0 ? "currentColor" : trackColor,
    borderEColor: progress > 25 ? "currentColor" : trackColor,
    borderBColor: progress > 50 ? "currentColor" : trackColor,
    borderSColor: progress > 75 ? "currentColor" : trackColor
  }
}

export interface SpinnerProps extends ComponentProps//, HTMLDivProps
{
  theme?: ComponentTheme,
  config?: ExtendConfig;
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(({
  thickness,
  trackColor,
  theme = "default",
  size = "md",
  variant = "default",
  progress,
  config,
  ...props
}: SpinnerProps, ref) =>
{
  const firstRender = useFirstRender();

  const styles = useComponentConfig(COMPONENT_ID, theme, config, { variant, size }, { trackColor, thickness, progress, ...props} as ComponentProps)

  const parsedTrackColor = useColor(trackColor || styles?.trackColor || "transparent")
  const parsedThickness = thickness || styles?.thickness
  const parsedProgress = progress || styles?.progress || 75

  delete styles.trackColor
  delete styles.thickness
  delete styles.progress

  return (
    <div
      transition={firstRender ? "none" : "all"}
      display="inline-block"
      {...getBorders(parsedTrackColor, parsedProgress)}
      borderStyle="solid"
      rounded="full"
      animate={parsedProgress > 0 && parsedProgress < 100 ? "spin" : "none"}
      {...styles}
      border={parsedThickness}
      {...props}
      ref={ref}
      >
    </div>
  );
});
