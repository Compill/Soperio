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

function createSoperioProps(type: React.ElementType, props: any)
{
  const asType = props["as"]
  delete props["as"]
  return { ...props, [typePropName]: asType ?? type };
}

let Soperio: any = null;

// TODO Add SVG sub elements like path, g, polyline, ...
const nonStyleableHtmlTags = ["html", "head", "link", "meta", "title", "script", "body", "style", "base"]

export function jsx<P>(
  type: React.ElementType<P>,
  props: P,
  key?: string
): SoperioJSX.Element
{
  // const isClient = typeof window !== "undefined";

  // @ts-ignore
  const isServer = props.server

  // Idea: create a SoperioServerComponent
  // This would prevent generating an Emotion component
  // Would be great for anything that doesn't use styles and states/context
  // console.log("soperio dev jsx, typeof", typeof type, type, props);
  // Basically, the idea is to use Emotion's jsx instead of React
  // and just add the css prop to the props with the CSS we have generated
  // @ts-ignore
  if (!isServer /*&& isClient*/ && typeof type === "string" && !type.SOPERIO_SERVER_COMPONENT && !nonStyleableHtmlTags.includes(type))
  {
    if (!Soperio)
      Soperio = require("./Soperio").Soperio;

    // return emotionJsx(type, parseProps(props), key);
    // @ts-ignore
    return ReactJSXRuntime.jsx(Soperio, createSoperioProps(type, props), key);
  }

  const _props = {...props}
  delete _props["server"]

  // return emotionJsx(type, props, key);
  // @ts-ignore
  return ReactJSXRuntime.jsx(type, _props, key);
}

export function jsxs<P>(
  type: React.ElementType<P>,
  props: P,
  key?: string
): SoperioJSX.Element
{
  // const isClient = typeof window !== "undefined";

  // @ts-ignore
  const isServer = props.server

  // return emotionJsx(type, parseProps(props), key);
  // Basically, the idea is to use Emotion's jsx instead of React
  // and just add the css prop to the props with the CSS we have generated
  // @ts-ignore
  if (!isServer /*&& isClient */&& typeof type === "string" && !type.SOPERIO_SERVER_COMPONENT && !nonStyleableHtmlTags.includes(type))
  {
    if (!Soperio)
      Soperio = require("./Soperio").Soperio;
    // return emotionJsx(type, parseProps(props), key);
    // @ts-ignore
    return ReactJSXRuntime.jsxs(Soperio, createSoperioProps(type, props), key);
  }

  const _props = { ...props }
  delete _props["server"]

  // return emotionJsx(type, props, key);
  // @ts-ignore
  return ReactJSXRuntime.jsxs(type, props, key);
}
