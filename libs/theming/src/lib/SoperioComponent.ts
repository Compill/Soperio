import { ResponsiveCSSProps } from "./CSSProps";
import { As } from "./forwardRef";

export interface SoperioComponent extends ResponsiveCSSProps
{
  className?: string | undefined,
  style?: React.CSSProperties | undefined;
  css?: Record<string, any>;
  id?: string,
  // as?: As
  // css: Interpolation<Theme>;
}

export type SoperioComponentWithAs = SoperioComponent & { as?: As }

// export type As<Props = any> = React.ElementType<Props>


// // Extract the props of a React element or component
// export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
//   as?: As
// }

// export type OmitCommonProps<
//   Target,
//   OmitAdditionalProps extends keyof any = never,
//   > = Omit<Target, "as" | OmitAdditionalProps>
//   // > = Omit<Target, "transition" | "as" | "color" | OmitAdditionalProps>

// export type RightJoinProps<
//   SourceProps extends object = any,
//   OverrideProps extends object = any,
//   > = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps

// export type MergeWithAs<
//   ComponentProps extends object,
//   AsProps extends object,
//   AdditionalProps extends object = any,
//   AsComponent extends As = As,
//   > = RightJoinProps<ComponentProps, AdditionalProps> &
//   RightJoinProps<AsProps, AdditionalProps> & {
//     as?: AsComponent
//   }

// export type ComponentWithAs<Component extends As, Props extends object = any> = {
//   <AsComponent extends As = Component>(
//     props: MergeWithAs<
//       React.ComponentProps<Component>,
//       React.ComponentProps<AsComponent>,
//       Props,
//       AsComponent
//     >,
//   ): JSX.Element

//   // displayName?: string
//   // propTypes?: React.WeakValidationMap<any>
//   // contextTypes?: React.ValidationMap<any>
//   // defaultProps?: Partial<any>
//   id?: string
// }

// export type SoperioComponent<T extends As, P = any> = ComponentWithAs<T, SoperioProps & P>

export type ParentComponent = {
  children?: React.ReactNode;
};
