import { CSSPropKeys } from "@soperio/theming";
import { omit, split } from "@soperio/utils";

/**
   * Returns all props that are not base Soperio props (like bgColor, m, hover_xx, ...)
   *
   * @param props
   * @returns props without Soperio props
   */
export function omitComponentProps(props: Record<string, any>): Record<string, any>
{
    return omit(props, CSSPropKeys);
}

/**
 * Returns an array of two prop objects
 * [0] contains Soperio props (like bgColor, m, hover_xx, ...)
 * [1] contains non-Soperio props
 * @param props
 * @returns
 */
export function splitComponentProps(props: Record<string, any>): Record<string, any>[]
{
    return split(props, CSSPropKeys);
};