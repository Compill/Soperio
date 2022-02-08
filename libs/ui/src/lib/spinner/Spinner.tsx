import { SoperioComponent, useColor, useColorTheme } from "@soperio/core";
import React from "react";
import { useComponentConfig } from "../hooks/useComponentConfig";
import { useFirstRender } from "../hooks/useFirstRender";
import { Soperio } from "../Soperio";
import defaultConfig from "./config";
import { SpinnerProps } from "./types";

const COMPONENT_ID = "Soperio.Spinner"

Soperio.registerComponent(COMPONENT_ID, defaultConfig)

function getBorders(trackColor: string, progress: number): SoperioComponent
{
  return {
    borderTColor: progress > 0 ? "currentColor" : trackColor,
    borderEColor: progress > 25 ? "currentColor" : trackColor,
    borderBColor: progress > 50 ? "currentColor" : trackColor,
    borderSColor: progress > 75 ? "currentColor" : trackColor
  }
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

  const styles = useComponentConfig(COMPONENT_ID, theme, config, { variant, size }, {...props, trackColor, thickness, progress})

  const parsedTrackColor = useColor(trackColor || styles?.trackColor || "transparent")
  const parsedThickness = thickness || styles?.thickness
  const parsedProgress = progress || styles?.progress || 75

  return (
    <div
      transition={firstRender ? "none" : "all"}
      display="inline-block"
      {...getBorders(parsedTrackColor, parsedProgress)}
      borderStyle="solid"
      rounded="full"
      border={parsedThickness}
      animate={parsedProgress > 0 && parsedProgress < 100 ? "spin" : "none"}
      {...styles}
      {...props}
      ref={ref}
      >
    </div>
  );
});
