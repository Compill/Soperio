import { parseProps } from "@soperio/core";
import { jsx as EmotionJSX } from "@emotion/react";

export const SOPERIO_TYPE = "__SOPERIO_TYPE_PLEASE_DO_NOT_USE__"

export function Soperio(props: any)
{
  const type = props[SOPERIO_TYPE];

  const newProps = typeof type === "string" ? parseProps(props) : props;

  return EmotionJSX(type, newProps, newProps.children);
}
