/** @jsx jsx */

import { jsx, useTheme } from "@soperio/core";
import { Soperio } from "../Soperio";
import { IS_DEV } from "@soperio/utils";
import { sanitizeProps } from "../utils";
import React from "react";
import { getStyledConfig } from "../utils";
import defaultConfig from "./config";
import { CheckboxConfig, CheckboxProps } from "./types";
import { useComponentConfig } from "../hooks/useComponentConfig";

const COMPONENT_ID = "Soperio.Checkbox";

Soperio.registerComponent(COMPONENT_ID, defaultConfig)

/**
 * A simple checkbox to be used with or without a surrounding form.
 * For using with Formik, please use formik/Checkbox instead
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((
  {
    theme = "default",
    label = "",
    otherNameThanSize = "lg",
    variant = "default",
    shape = "rounded",
    config,
    checked,
    ...props
  }, ref) =>
{
  const colorTheme = useTheme(theme);

  const styles = useComponentConfig(COMPONENT_ID, colorTheme, config)
  const sVariant = styles.variant?.[variant];
  const sSize = styles.otherNameThanSize?.[otherNameThanSize];
  const sShape = styles.shape?.[shape];

  if (!sVariant && IS_DEV)
    console.log(`[Soperio Checkbox Component]: variant ${variant} does not exist in your theme/config`);

  const checkedProps = (sVariant && checked && sVariant.checked) || {};
  const disabledProps = (sVariant && props.disabled && sVariant.disabled) || {};

  const [soperioProps, inputProps] = Soperio.splitComponentProps(props)

  return (
    <div {...soperioProps}>
      <label display="inline-block" verticalAlign="middle" userSelect="none" cursor={props.disabled ? "default" : "pointer"} lineHeight="none">
        <input
          border="0"
          h="px"
          w="px"
          m="-px"
          overflow="hidden"
          p="0"
          position="absolute"
          whitespace="nowrap"
          style={{
            clip: "rect(0 0 0 0)",
            clipPath: "inset(50%)"
          }}
          type="checkbox"
          defaultChecked={checked}
          {...inputProps}
          ref={ref}
        />
        <div
          bgColor="sky-500"
          rounded
          color="white"
          display="inline-block"
          transition="all"
          easing={checked ? "out" : "linear"}
          duration="300"
          {...sanitizeProps(sVariant, "disabled", "checked")}
          {...sanitizeProps(sSize, "disabled", "checked")}
          {...sanitizeProps(sShape, "disabled", "checked")}
          {...checkedProps}
          {...disabledProps}
        >
          {checked && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2px"><polyline points="20 6 9 17 4 12"></polyline></svg>}
        </div>
      </label>
      {label && <span ml="3">{label}</span>}
    </div>
  );
});
