// import * as ReactJSXRuntime from "react/jsx-runtime";
import { jsx as emotionJsx } from "@emotion/react";
import { parseProps, SoperioComponent } from "@soperio/core";
import { SoperioJSX } from "./jsx-namespace";
import { SVGSoperioProps } from "./SVG";
export { Fragment } from 'react';
export type { SoperioJSX as JSX } from './jsx-namespace';

declare module "react" {
  interface HTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T>, SoperioComponent
  {

  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface SVGAttributes<T> extends SVGSoperioProps
  {

  }
}
export function jsx<P>(
  type: React.ElementType<P>,
  props: P,
  key?: string
): SoperioJSX.Element
{
  // Basically, the idea is to use Emotion's jsx instead of React
  // and just add the css prop to the props with the CSS we have generated
  if (typeof type === "string")
  {
    return emotionJsx(type, parseProps(props), key);
  }

  return emotionJsx(type, props, key);
  // return ReactJSXRuntime.jsx(type, parseProps(props), key);
}

export function jsxs<P>(
  type: React.ElementType<P>,
  props: P,
  key?: string
): SoperioJSX.Element
{
  return emotionJsx(type, parseProps(props), key);
}
