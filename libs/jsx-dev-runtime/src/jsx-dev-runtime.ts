import { SoperioComponent } from '@soperio/theming';
import React from "react";
import * as ReactJSXRuntimeDev from 'react/jsx-dev-runtime';
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

const typePropName = '__SOPERIO_TYPE_PLEASE_DO_NOT_USE__'

function createSoperioProps(type: React.ElementType, props: any)
{
  const asType = props["as"]
  delete props["as"]
  return { ...props, [typePropName]: asType ?? type };
}

export function jsxDEV<P>(
  type: React.ElementType<P>,
  props: P,
  key: string | undefined,
  isStaticChildren: boolean,
  source: {
    filename: string;
    lineNumber: number;
    columnNumber: number;
  },
  self: any
): SoperioJSX.Element
{
  if (typeof type === "string")
  {
    // @ts-ignore
    return ReactJSXRuntimeDev.jsxDEV(Soperio, createSoperioProps(type, props), key, isStaticChildren, source, self);
  }

  // That's how emotion is doing it!
  //  instead of passing type, they put the type in a special prop
  // and use type "Emotion" to create the component
  // return emotionJsxDEV(Soperio, parseProps(props), key, isStaticChildren, source, self);
  // @ts-ignore
  return ReactJSXRuntimeDev.jsxDEV(type, props, key, isStaticChildren, source, self);
    // return ReactJSXRuntimeDev.jsxDEV(Soperio, createSoperioProps(type, props), key, isStaticChildren, source, self);
}

/**
 * Alright so basically the idea is to create a fucking Soperio component
 * that will parse the props and then return an Emotion component that will parse the CSS...
 */
