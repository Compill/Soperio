/** @jsx jsx */

import { Color, ColorTheme, ComponentTheme, jsx, SoperioComponent, SpacingPositiveScale, useColorTheme } from "@soperio/core"
import { useComponentConfig } from "../hooks/useComponentConfig";
import { HTMLDivProps } from "../HTMLTagProps";
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
    borderRColor: progress > 25 ? "currentColor" : trackColor,
    borderBColor: progress > 50 ? "currentColor" : trackColor,
    borderLColor: progress > 75 ? "currentColor" : trackColor
  }
}

export function Spinner({
  thickness="2px",
  trackColor="transparent",
  theme = "default",
  size = "md",
  variant = "default",
  progress = 75,
  config,
  ...props
}: SpinnerProps) 
{
  const colorTheme = useColorTheme(theme);
  // const x = useColor(trackColor)
  const styles = useComponentConfig(COMPONENT_ID, colorTheme, config)
  const sVariant = styles.variant?.[variant];
  const sSize = styles.size?.[size];

  return (
    <div 
      display="inline-block"
      {...getBorders(trackColor, progress)}
      borderStyle="solid"
      rounded="full"
      border={thickness}
      animate={progress > 0 && progress < 100 ? "spin" : "none"}
      {...sanitizeProps(sVariant, "trackColor")}
      {...sSize}
      {...props}
      >
    </div>
  );
}

export default Spinner;
