import { SoperioComponent } from '@soperio/theming';
import React from "react";
import * as ReactJSXRuntimeDev from 'react/jsx-dev-runtime';
import { SoperioJSX } from "./jsx-namespace";
import { SVGSoperioProps } from "./SVG";
import { parseProps } from "@soperio/core";


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

const nonStyleableHtmlTags = ["html", "head", "link", "meta", "script", "title", "body", "style", "base"]

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
  // @ts-ignore
  const isServer = props.server

  if (!isServer && /*isClient &&*/ typeof type === "string" && !nonStyleableHtmlTags.includes(type))
  {
    // @ts-ignore
    return ReactJSXRuntimeDev.jsxDEV(type, parseProps(createSoperioProps(type, props)), key, isStaticChildren, source, self);
  }

  const _props = { ...props }
  delete _props["server"]

  // @ts-ignore
  return ReactJSXRuntimeDev.jsxDEV(type, _props, key, isStaticChildren, source, self);
}
