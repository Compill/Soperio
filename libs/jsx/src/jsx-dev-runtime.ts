// jsx-dev-runtime.ts - Updated for React 19
import { SoperioComponent } from '@soperio/theming';
import React from "react";
import * as ReactJSXRuntimeDev from 'react/jsx-dev-runtime';
import { SoperioJSX } from "./jsx-namespace";
import { Soperio } from "./Soperio";
import { SVGSoperioProps } from "./SVG";

export { Fragment } from 'react';
export type { SoperioJSX as JSX } from './jsx-namespace';

// CRITICAL: React 19 requires JSX namespace to be scoped in module declaration
declare module "react/jsx-dev-runtime" {
  namespace JSX
  {
    interface IntrinsicElements extends SoperioJSX.IntrinsicElements { }
  }
}

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

// React 19 changed the jsxDEV signature to only 3 parameters
export function jsxDEV<P>(
  type: React.ElementType<P>,
  props: P,
  key?: string | undefined
): SoperioJSX.Element
{
  console.log("soperio dev jsx, typeof", typeof type, type, props);

  // @ts-ignore
  if (typeof type === "string" && !type.SOPERIO_SERVER_COMPONENT && !props.isSoperioServerComponent && !nonStyleableHtmlTags.includes(type))
  {
    // @ts-ignore
    return ReactJSXRuntimeDev.jsxDEV(Soperio, createSoperioProps(type, props), key);
  }
  // @ts-ignore
  return ReactJSXRuntimeDev.jsxDEV(type, props, key);
}

/**
 * Alright so basically the idea is to create a fucking Soperio component
 * that will parse the props and then return an Emotion component that will parse the CSS...
 */
