import { HTMLDivProps, useComponentConfig, useComponentConfig2 } from "@soperio/components";
import React from "react";
import { SurfaceSchemeSet } from "../../SurfaceScheme";
import { ThemingToken } from "../../ThemingToken";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Soperio.Surface"

// TODO Rename folders, all in lowercase

// TODO Since I now have a Surface component, I could also create a Layer component
// That will use layer color schemes (e.g just a bg color and content color)
// Something like <Layer depth="0"></Layer>
// depth being the stack index/z-index of the layer

// TODO Make all component extends SurfaceSchemeProps instead of redefining the
// scheme property

export interface SurfaceSchemeProps
{
  scheme?: Extract<keyof ThemingToken<"surfaces">, string> | SurfaceSchemeSet,
}

export interface SurfaceProps extends ComponentProps, SurfaceSchemeProps, HTMLDivProps
{
  // variant is already in ComponentProps
  config?: ExtendConfig;
  hoverable?: boolean
}

export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>((
  {
    scheme = "primary",
    hoverable,
    variant,
    config,
    ...props
  }: SurfaceProps, ref) =>
{
  const styles = useComponentConfig2(COMPONENT_ID, scheme, config, { variant }, props)

  const filteredStyles = { ...styles }

  if (!hoverable)
  {
    Object.keys(filteredStyles).forEach((key) =>
    {
      if (key.includes("hover_"))
        delete filteredStyles[key]
    })
  }

  return (
    <div
      {...(hoverable ? { cursor: "pointer" } : null)}
      {...filteredStyles}
      {...props}
      ref={ref}
    >
      {props.children}
    </div>
  )
})

/*
  <Surface scheme="primary" variant="alt">
    {children}
  </Surface>
*/

/*
  <Surface scheme="primary" variant="alt">
    (colorScheme) => (
      <span color="colorScheme.onColor">Hello</span>
      <Icon svg="" color="colorScheme.onColor" />
    ))
  </Surface>
*/

/*
  const children = (colorScheme) => (
      <span color="colorScheme.onColor">Hello</span>
      <Icon svg="" color="colorScheme.onColor" />
    ))

  <Surface scheme="primary" variant="alt">
    {children}
  </Surface>
*/
