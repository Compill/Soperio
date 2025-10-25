import { SoperioComponent } from "@soperio/theming";
import React from "react";
import * as ReactJSXRuntime from "react/jsx-runtime";
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

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Attributes extends SoperioComponent { }
}

const typePropName = '__SOPERIO_TYPE_PLEASE_DO_NOT_USE__';

// This is the server jsx runtime
// So we don't transform the props
export function jsx<P>(
  type: React.ElementType<P>,
  props: P,
  key?: string
): SoperioJSX.Element
{
  const _props = { ...props }
  const asType = props["as"]
  delete _props["as"]
  delete _props["server"]
  _props[typePropName] = asType ?? type

  if (typeof _props[typePropName] === "string")
    delete _props[typePropName]

  // @ts-ignore
  return ReactJSXRuntime.jsx(type, _props, key);
}

export function jsxs<P>(
  type: React.ElementType<P>,
  props: P,
  key?: string
): SoperioJSX.Element
{
  const _props = { ...props }
  const asType = props["as"]
  delete _props["as"]
  delete _props["server"]
  _props[typePropName] = asType ?? type

  if (typeof _props[typePropName] === "string")
    delete _props[typePropName]

  // @ts-ignore
  return ReactJSXRuntime.jsxs(type, props, key);
}
