import { parseProps } from "@soperio/core";
import { jsx as EmotionJSX } from "@emotion/react";
import React from "react";
import { useDarkMode, useDirection, useTheme } from "@soperio/theming";

export const SOPERIO_TYPE = "__SOPERIO_TYPE_PLEASE_DO_NOT_USE__"

export const Soperio = (props: any, ref) =>
{
  const theme = useTheme()
  const direction = useDirection()
  const darkMode = useDarkMode()

  const type = props[SOPERIO_TYPE];

  const newProps = React.useMemo(() =>
  {
    const p = typeof type === "string" ? parseProps(props, theme, direction, darkMode) : { ...props }
    p.ref = ref

    return p
  }, [props, type, theme, direction, darkMode, ref]);

  return EmotionJSX(type, newProps);
};
