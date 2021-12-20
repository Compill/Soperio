/** @jsx jsx */
/** @jsxFrag jsx */

import { jsx, useColorTheme } from "@soperio/core";
import { IS_DEV } from "@soperio/utils";
import React from "react";
import { useComponentConfig } from "../hooks/useComponentConfig";
import { useFirstRender } from "../hooks/useFirstRender";
import { Soperio } from "../Soperio";
import { sanitizeProps } from "../utils";
import defaultConfig from "./config";
import { RadioProps } from "./types";

const COMPONENT_ID = "Soperio.Radio";

Soperio.registerComponent(COMPONENT_ID, defaultConfig)

/**
 * A simple checkbox to be used with or without a surrounding form.
 * For using with Formik, please use formik/Radio instead
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>((
  {
    theme = "default",
    label = "",
    otherNameThanSize = "lg",
    variant = "default",
    dotSize = "lg",
    checked,
    config,
    ...props
  }, ref) =>
{
  const firstRender = useFirstRender();
  const colorTheme = useColorTheme(theme);

  const styles = useComponentConfig(COMPONENT_ID, colorTheme, config)
  const sVariant = styles.variant?.[variant];
  const sSize = styles.otherNameThanSize?.[otherNameThanSize];

  if (!sVariant && IS_DEV)
    console.log(`[Soperio Radio Component]: variant ${variant} does not exist in your theme/config`);

  const checkedProps = (sVariant && checked && sVariant.checked) || {};
  const disabledProps = (sVariant && props.disabled && sVariant.disabled) || {};

  const [soperioProps, inputProps] = Soperio.splitComponentProps(props);

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
          // TODO CSS prop
          style={{
            clip: "rect(0 0 0 0)",
            clipPath: "inset(50%)"
          }}
          type="radio"
          defaultChecked={checked}
          {...inputProps}
          ref={ref}
        />
        <div
          bgColor="sky-500"
          color="white"
          display="inline-block"
          transition={firstRender ? "none" : "all"}
          easing={checked ? "out" : "linear"}
          duration="300"
          rounded="full"
          {...sanitizeProps(sVariant, "disabled", "checked")}
          {...sanitizeProps(sSize, "disabled", "checked")}
          {...checkedProps}
          {...disabledProps}
        >
          {checked && (
            <React.Fragment>
              {checked && dotSize === "sm" && <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" /></svg>}
              {checked && dotSize === "md" && <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" /></svg>}
              {checked && dotSize === "lg" && <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 6A6 6 0 1 1 6 12A6 6 0 0 1 12 6M6 12A6 6 0 0 0 15Z" /></svg>}
            </React.Fragment>
          )}
        </div>
      </label>
      {label && <span ml="3">{label}</span>}
    </div>
  );
});
