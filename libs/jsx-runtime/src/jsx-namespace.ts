/* eslint-disable @typescript-eslint/no-empty-interface */
import { SoperioComponent } from "@soperio/theming";

type WithConditionalSoperioProp<P> = 'className' extends keyof P
  ? string extends P['className']
  ? P & SoperioComponent
  : P
  : P;

type ReactJSXElement = JSX.Element;
type ReactJSXElementClass = JSX.ElementClass;
type ReactJSXElementAttributesProperty = JSX.ElementAttributesProperty;
type ReactJSXElementChildrenAttribute = JSX.ElementChildrenAttribute;
type ReactJSXLibraryManagedAttributes<C, P> = JSX.LibraryManagedAttributes<C, P>;
type ReactJSXIntrinsicAttributes = JSX.IntrinsicAttributes;
type ReactJSXIntrinsicClassAttributes<T> = JSX.IntrinsicClassAttributes<T>;
type ReactJSXIntrinsicElements = JSX.IntrinsicElements;

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace SoperioJSX
{
  export interface Element extends ReactJSXElement { }
  export interface ElementClass extends ReactJSXElementClass { }
  export interface ElementAttributesProperty
    extends ReactJSXElementAttributesProperty { }
  export interface ElementChildrenAttribute
    extends ReactJSXElementChildrenAttribute { }
  export type LibraryManagedAttributes<C, P> = WithConditionalSoperioProp<P> &
    // We are not removing incompatible `sx` props, because touching this breaks
    // inference in generic components.
    // Yes, we steal any prop called `sx` at runtime, but we
    // can't represent it on type level without breaking compatibility with
    // our own Field, react-hook-form, and a bunch of other generic components.
    // Don't touch ReactJSXLibraryManagedAttributes or you'll spend hours
    // debugging and entirely spoil your day.
    ReactJSXLibraryManagedAttributes<C, P>;
  export interface IntrinsicAttributes extends ReactJSXIntrinsicAttributes { }
  export interface IntrinsicClassAttributes<T>
    extends ReactJSXIntrinsicClassAttributes<T> { }
  export type IntrinsicElements = {
    [K in keyof ReactJSXIntrinsicElements]: ReactJSXIntrinsicElements[K] &
    SoperioComponent
  };
}
