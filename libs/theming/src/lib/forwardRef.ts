// /**
//  * All credit goes to Chance (Reach UI), Haz (Reakit) and (fluentui)
//  * for creating the base type definitions upon which we improved on
//  */
// import * as React from "react"
// import { As, ComponentWithAs, PropsOf, RightJoinProps } from "./SoperioComponent"

import React from "react"

// export function forwardRef<Props extends object, Component extends As>(
//   component: React.ForwardRefRenderFunction<
//     any,
//     RightJoinProps<PropsOf<Component>, Props> & {
//       as?: As
//     }
//   >,
// )
// {
//   return (React.forwardRef(component) as unknown) as ComponentWithAs<
//     Component,
//     Props
//   >
// }

export type As<Props = any> = React.ElementType<Props>

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As
}

export type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never,
  > = Omit<Target, "transition" | "as" | "color" | OmitAdditionalProps>

export type RightJoinProps<
  SourceProps extends object = any,
  OverrideProps extends object = any,
  > = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps

export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = any,
  AsComponent extends As = As,
  > = RightJoinProps<ComponentProps, AdditionalProps> &
  RightJoinProps<AsProps, AdditionalProps> & {
    as?: AsComponent
  }

export type ComponentWithAs<Component extends As, Props extends object = any> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      React.ComponentProps<Component>,
      React.ComponentProps<AsComponent>,
      Props,
      AsComponent
    >,
  ): JSX.Element

  displayName?: string
  propTypes?: React.WeakValidationMap<any>
  contextTypes?: React.ValidationMap<any>
  defaultProps?: Partial<any>
  id?: string
}

export function forwardRef<Component extends As, Props extends object>(
  component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As
    }
  >,
)
{
  return (React.forwardRef(component) as unknown) as ComponentWithAs<
    Component,
    Props
  >
}
