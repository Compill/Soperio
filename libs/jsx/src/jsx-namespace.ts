/* eslint-disable @typescript-eslint/no-empty-interface */
import { SoperioComponent } from "@soperio/theming";
import React from "react";

type WithConditionalSoperioProp<P> = 'className' extends keyof P
  ? string extends P['className']
  ? P & SoperioComponent & { as?: React.ElementType }
  : P
  : P;

// React 19: Import JSX types from react/jsx-runtime instead
type ReactJSXElement = React.JSX.Element;
type ReactJSXElementClass = React.JSX.ElementClass;
type ReactJSXElementAttributesProperty = React.JSX.ElementAttributesProperty;
type ReactJSXElementChildrenAttribute = React.JSX.ElementChildrenAttribute;
type ReactJSXLibraryManagedAttributes<C, P> = React.JSX.LibraryManagedAttributes<C, P>;
type ReactJSXIntrinsicAttributes = React.JSX.IntrinsicAttributes;
type ReactJSXIntrinsicClassAttributes<T> = React.JSX.IntrinsicClassAttributes<T>;
type ReactJSXIntrinsicElements = React.JSX.IntrinsicElements;

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace SoperioJSX
{
  export interface Element extends ReactJSXElement { }
  export interface ElementClass extends ReactJSXElementClass { }
  export interface ElementAttributesProperty
    extends ReactJSXElementAttributesProperty { }
  export interface ElementChildrenAttribute
    extends ReactJSXElementChildrenAttribute { }
  export type LibraryManagedAttributes<C, P> = WithConditionalSoperioProp<
    ReactJSXLibraryManagedAttributes<C, P>
  >;
  export interface IntrinsicAttributes extends ReactJSXIntrinsicAttributes { }
  export interface IntrinsicClassAttributes<T>
    extends ReactJSXIntrinsicClassAttributes<T> { }
  export type IntrinsicElements = {
    [K in keyof ReactJSXIntrinsicElements]: ReactJSXIntrinsicElements[K] &
    SoperioComponent
  };
}
