/* eslint-disable @typescript-eslint/ban-types */
import { Dict, isFunction } from "@soperio/utils";
import { defaultTheme } from "../defaultTheme";
import { ExtendTheme } from "../ExtendTheme";
import { isSoperioTheme } from "../isSoperioTheme";
import { Theme } from "../Theme";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const _ = require("lodash");

type AnyFunction<T = any> = (...args: T[]) => any;

const pipe =
    <R>(...fns: Array<(a: R) => R>) =>
        (v: R) =>
            fns.reduce((a, b) => b(a), v);

type CloneKey<Target, Key> = Key extends keyof Target ? Target[Key] : unknown;

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
};

/**
 * Represents a loose but specific type for the theme override.
 * It provides autocomplete hints for extending the theme, but leaves room
 * for adding properties.
 */
type DeepThemeExtension<BaseTheme, ThemeType> = {
    [Key in keyof BaseTheme]?: BaseTheme[Key] extends (...args: any[]) => any
    ? DeepThemeExtension<
        DeepPartial<ReturnType<BaseTheme[Key]>>,
        CloneKey<ThemeType, Key>
    >
    : BaseTheme[Key] extends Array<any>
    ? CloneKey<ThemeType, Key>
    : BaseTheme[Key] extends object
    ? DeepThemeExtension<DeepPartial<BaseTheme[Key]>, CloneKey<ThemeType, Key>>
    : CloneKey<ThemeType, Key>
};
declare type ThemeOverride<BaseTheme = Theme> =
    DeepPartial<ExtendTheme> & DeepThemeExtension<BaseTheme, ExtendTheme> & Dict;

type ThemeExtension<Override extends ThemeOverride = ThemeOverride> = (
    themeOverride: Override,
) => Override;

type BaseThemeWithExtensions<
    BaseTheme extends ExtendTheme,
    Extensions extends readonly [...any],
    > = BaseTheme &
    (Extensions extends [infer L, ...infer R]
        ? L extends AnyFunction
        ? ReturnType<L> & BaseThemeWithExtensions<BaseTheme, R>
        : L & BaseThemeWithExtensions<BaseTheme, R>
        : Extensions);

export function extendTheme(...extensions: ExtendTheme[]): Theme
{
    let overrides = [...extensions];
    let baseTheme = extensions[extensions.length - 1];
    if (
        isSoperioTheme(baseTheme) &&
        // this ensures backward compatibility
        // previously only `extendTheme(override, baseTheme?)` was allowed
        overrides.length > 1
    )
    {
        overrides = overrides.slice(0, overrides.length - 1);
    } else
    {
        baseTheme = defaultTheme;
    }

    return pipe(
        ...overrides.map(
            (extension) => (prevTheme: any) =>
                isFunction(extension)
                    ? (extension as any)(prevTheme)
                    : mergeThemeOverride(prevTheme, extension),
        ),
    )(baseTheme);
}

function mergeThemeOverride(...overrides: any[]): any
{
    return _.mergeWith({}, ...overrides);
}
function mergeThemeCustomizer(
    source: unknown,
    override: unknown,
    key: string,
    object: any,
)
{
    if (
        (isFunction(source) || isFunction(override)) &&
        Object.prototype.hasOwnProperty.call(object, key)
    )
    {
        return (...args: unknown[]) =>
        {
            const sourceValue = isFunction(source) ? source(...args) : source;

            const overrideValue = isFunction(override) ? override(...args) : override;
            return _.mergeWith({}, sourceValue, overrideValue, mergeThemeCustomizer);
        };
    }

    // fallback to default behaviour
    return undefined;
}