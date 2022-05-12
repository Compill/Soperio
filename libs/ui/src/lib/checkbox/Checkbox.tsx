import { ComponentManager, ComponentTheme, HTMLInputProps, splitComponentProps, useComponentConfig, useFirstRender } from "@soperio/react";
import React from "react";
import { ComponentProps, ExtendConfig } from "./types";
import defaultConfig from "./config"

const COMPONENT_ID = "Soperio.Checkbox";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface CheckboxProps extends ComponentProps, Omit<HTMLInputProps, "size">
{
  label?: string,
  theme?: ComponentTheme;
  config?: ExtendConfig;
}

/**
 * A simple checkbox to be used with or without a surrounding form.
 * For using with Formik, please use formik/Checkbox insteada surrounding form.
 * For using with Formik, please use formik/Checkbox instead
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((
  {
    theme = "default",
    label = "",
    size = "lg",
    variant = "default",
    shape = "rounded",
    config,
    ...props
  }, ref) =>
{
  const firstRender = useFirstRender();

  const styles = useComponentConfig(COMPONENT_ID, theme, config, { variant, size, shape }, props)

  const [soperioProps, inputProps] = splitComponentProps(props)

  return (
    <div display="flex" flexRow  alignItems="center" {...soperioProps}>
      <label userSelect="none" cursor={props.disabled ? "default" : "pointer"} lineHeight="none">
        <input
          border="0"
          h="px"
          w="px"
          m="-px"
          overflow="hidden"
          p="0"
          position="absolute"
          whiteSpace="nowrap"
          style={{
            clip: "rect(0 0 0 0)",
            clipPath: "inset(50%)"
          }}
          type="checkbox"
          {...inputProps}
          ref={ref}
        />
        <div
          bgColor="sky-500"
          rounded
          color="white"
          display="inline-block"
          transition={firstRender ? "none" : "all"}
          easing={props.checked ? "out" : "linear"}
          duration="300"
          {...styles}
        >
          {props.checked && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2px"><polyline points="20 6 9 17 4 12"></polyline></svg>}
        </div>
      </label>
      {label && <span fontSize={styles.fontSize} ms="3">{label}</span>}
    </div>
  );
});
