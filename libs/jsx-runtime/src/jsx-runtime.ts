import { SoperioComponent } from "@soperio/core";
import * as ReactJSXRuntime from "react/jsx-runtime";
import { SoperioJSX } from "./jsx-namespace";
import { Soperio } from "./Soperio";
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

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Attributes extends SoperioComponent { }
}

const typePropName = '__SOPERIO_TYPE_PLEASE_DO_NOT_USE__';

function createSoperioProps(type: React.ElementType, props: any)
{
  return { ...props, [typePropName]: type };
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
    // return emotionJsx(type, parseProps(props), key);
    // @ts-ignore
    return ReactJSXRuntime.jsx(Soperio, createSoperioProps(type, props), key);
  }

  // return emotionJsx(type, props, key);
  // @ts-ignore
  return ReactJSXRuntime.jsx(type, props, key);
}

export function jsxs<P>(
  type: React.ElementType<P>,
  props: P,
  key?: string
): SoperioJSX.Element
{
  // return emotionJsx(type, parseProps(props), key);
  // Basically, the idea is to use Emotion's jsx instead of React
  // and just add the css prop to the props with the CSS we have generated
  if (typeof type === "string")
  {
    // return emotionJsx(type, parseProps(props), key);
    // @ts-ignore
    return ReactJSXRuntime.jsxs(Soperio, createSoperioProps(type, props), key);
  }

  // return emotionJsx(type, props, key);
  // @ts-ignore
  return ReactJSXRuntime.jsxs(type, props, key);
}
