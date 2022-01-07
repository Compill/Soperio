import { SoperioComponent, useColor, useColorTheme } from "@soperio/core";
import React from "react";
import { useComponentConfig } from "../hooks/useComponentConfig";
import { useFirstRender } from "../hooks/useFirstRender";
import { Soperio } from "../Soperio";
import { sanitizeProps } from "../utils";
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
  thickness="2px",
  trackColor,
  theme = "default",
  size = "md",
  variant = "default",
  progress = 75,
  config,
  ...props
}: SpinnerProps, ref) =>
{
  const firstRender = useFirstRender();
  const colorTheme = useColorTheme(theme);

  const styles = useComponentConfig(COMPONENT_ID, colorTheme, config)
  const sVariant = styles.variant?.[variant];
  const sSize = styles.size?.[size];

  const parsedTrackColor = useColor(trackColor || sVariant?.trackColor || "transparent")

  return (
    <div
      transition={firstRender ? "none" : "all"}
      display="inline-block"
      {...getBorders(parsedTrackColor, progress)}
      borderStyle="solid"
      rounded="full"
      border={thickness}
      animate={progress > 0 && progress < 100 ? "spin" : "none"}
      {...sanitizeProps(sVariant, "trackColor")}
      {...sSize}
      {...props}
      ref={ref}
      >
    </div>
  );
});
