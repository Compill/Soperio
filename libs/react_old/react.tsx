import { jsx as emotionJsx } from "@emotion/react";
import { SoperioComponent } from "@soperio/core";
import React from "react";
// import * as ReactJSXRuntime from "react/jsx-runtime";
import { parseProps } from "@soperio/core";
import { SVGSoperioProps } from "./SVG";

// on augmente les types des éléments DOM
declare module "react" {
  interface HTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T>, SoperioComponent
  {

  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface SVGAttributes<T> extends SVGSoperioProps
  {

  }
}

// on override la fonction createElement de React
export function jsx<P extends SoperioComponent>(
  Component: React.ComponentType<P> | string,
  props: P,
  ...children: React.ReactElement<any>[]
)
{

  // Basically, the idea is to use Emotion's jsx instead of React
  // and just add the css prop to the props with the CSS we have generated
  if (typeof Component === "string")
  {
    return emotionJsx(Component, parseProps(props), ...children);
  }

  return emotionJsx(Component, props, ...children);
  // Can't use fucking ReactJSXRuntime.jsx for some reason, so just use EmotionJsx for now
  //return ReactJSXRuntime.jsx(Component, props, ...children);
}
