import { parseProps } from "@soperio/core";
import { jsx as EmotionJSX } from "@emotion/react";
import React from "react";

export const SOPERIO_TYPE = "__SOPERIO_TYPE_PLEASE_DO_NOT_USE__";

export const Soperio = React.forwardRef((props: any, ref) =>
{
  const type = props[SOPERIO_TYPE];

  const newProps = typeof type === "string" ? parseProps(props) : props;
  newProps.ref = ref;

  return EmotionJSX(type, newProps, newProps.children);
});
