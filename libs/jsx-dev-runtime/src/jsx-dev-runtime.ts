// @ts-ignore
import { jsxDEV as emotionJsxDEV } from '@emotion/react/jsx-dev-runtime';
import { parseProps, SoperioComponent } from '@soperio/core';
import { SoperioJSX } from "./jsx-namespace";
import { SVGSoperioProps } from "./SVG";
import * as ReactJSXRuntimeDev from 'react/jsx-dev-runtime'
import { Soperio } from "./Soperio";
import React from "react";

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

const typePropName = '__SOPERIO_TYPE_PLEASE_DO_NOT_USE__'

function createSoperioProps(type: React.ElementType, props: any)
{
  return { ...props, [typePropName]: type };
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
    return ReactJSXRuntimeDev.jsxDEV(Soperio, createSoperioProps(type, props), key, isStaticChildren, source, self);
  }

  // That's how emotion is doing it!
  //  instead of passing type, they put the type in a special prop
  // and use type "Emotion" to create the component
  // return emotionJsxDEV(Soperio, parseProps(props), key, isStaticChildren, source, self);
  return ReactJSXRuntimeDev.jsxDEV(type, props, key, isStaticChildren, source, self);
    // return ReactJSXRuntimeDev.jsxDEV(Soperio, createSoperioProps(type, props), key, isStaticChildren, source, self);
}

/**
 * Alright so basically the idea is to create a fucking Soperio component
 * that will parse the props and then return an Emotion component that will parse the CSS...
 */
