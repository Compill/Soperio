import { SoperioComponent } from "@soperio/theming";
import { ComponentTheme } from "../ComponentTheme";
import { useColorTheme, useDarkMode } from "@soperio/theming";
import { IS_DEV } from "@soperio/utils";
import deepmerge from "deepmerge";
import React from "react";
import { BaseMultiPartComponentConfig, ExtendMultiPartComponentConfig, MultiPartComponentConfig } from "../ComponentConfig";
import { ComponentState, ComponentThemeState } from "../ComponentStates";
import { ComponentManager } from "../ComponentManager";

type KeysOf<T> =
{
  [Property in keyof T]: string
}

type OmitStates<T> = Omit<T, "active" | "checked" | "disabled" | "invalid" | "selected" | "valid" | "activeDisabled" | "checkedDisabled" | "selectedDisabled">

// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction<T extends Function = Function>(
  value: any,
): value is T
{
  return typeof value === "function";
}

function runIfFn<T>(
  // Won't work because of fucking generic with type Config
  // valueOrFn: T | ((...fnArgs: any[]) => T),
  valueOrFn: any | ((...fnArgs: any[]) => any),
  ...args: any[]
): T
{
  return isFunction(valueOrFn) ? valueOrFn(...args) as T : valueOrFn as T;
}

type MultiPartProps<T extends SoperioComponent, P extends BaseMultiPartComponentConfig<T>> =
{
  // [E in P as Property in keyof E["subComponents"]]: T
  // [Property in keyof Extract<P, "subComponents">]: T
  [Property in keyof P]: T
}

export function useMultiPartComponentConfig<T, P extends MultiPartComponentConfig<T>>(
  component = "",
  theme: ComponentTheme = "default",
  customConfig: ExtendMultiPartComponentConfig<P> | undefined,
  componentConfig: KeysOf<P> = {} as KeysOf<P>,
  props?: T): Record<string, SoperioComponent>//MultiPartProps<T, BaseMultiPartComponentConfig<T>>
{
  const [defaultConfig] = React.useState(() => ComponentManager.getComponentConfig(component) as MultiPartComponentConfig<T>);
  const darkMode = useDarkMode();

  if (!defaultConfig && IS_DEV)
    console.warn(`[Soperio] ${component} default config does not exist. Make sure to register it by calling Soperio.registerComponent().`);

  const colorTheme = useColorTheme(theme);

  let config

  if (customConfig)
  {
    const c = runIfFn<MultiPartComponentConfig<T>>(customConfig.config, colorTheme, darkMode) as MultiPartComponentConfig<T>

    if (customConfig.mode === "extends")
      config = deepmerge(runIfFn(defaultConfig, colorTheme, darkMode) ?? {}, c as unknown as Partial<T>) as T;
    else
      config = c;
  }
  else if (defaultConfig)
  {
    config = runIfFn<MultiPartComponentConfig<T>>(defaultConfig, colorTheme, darkMode);
  }

  if (config)
    return mergeProps(config as BaseMultiPartComponentConfig<T>, componentConfig, props)// as MultiPartProps<T, BaseMultiPartComponentConfig<T>>;

  return {}// as MultiPartProps<T, P>;
}

// Get the right set of soperio props from the config traits (variant, size, corners, ...)
function mergeProps<T, P extends MultiPartComponentConfig<T>>(config: BaseMultiPartComponentConfig<T>, componentConfig: KeysOf<P>, props: any): Record<string, T>
{
  const subComponents = config.subComponents

  const parsedConfig:any = { }

  for (const subComponent of subComponents)
  {
    // Let's start with the component default values
    let finalProps = { ...(config.defaultProps?.[subComponent] as any) };

    const defaultTraits = config.defaultTraits;

    const c = config as any;

    const traits = c.traits;

    for (const key in componentConfig)
    {
      const variant = traits[key];
      const selectedVariant = variant ? (variant as any)[componentConfig[key] ?? defaultTraits?.[key]] : null

      const configProps = selectedVariant?.[subComponent];

      if (configProps)
        finalProps = deepmerge(finalProps, configProps) as T;
    }

    finalProps = mergeStateProps(finalProps, props)

    parsedConfig[subComponent] = finalProps;
  }

  return parsedConfig
}

// Final step : merge the props with the state props
// checked, selected, disabled, ...
function mergeStateProps<T extends SoperioComponent>(configProps: any, props: any): T
{
  let finalProps = {...configProps};

  // Remove theme states from final props
  // Soperio props don't have stateActive, stateDisabled, etc
  // only their html counterparts like disabled, selected, checked, ...
  //
  // Theme props :
  // stateDisabled: {
  //  // bunch of soperio props
  // }
  //
  // Soperio props
  // disabled: true
  delete finalProps[ComponentThemeState.VALID]
  delete finalProps[ComponentThemeState.INVALID]
  delete finalProps[ComponentThemeState.ACTIVE]
  delete finalProps[ComponentThemeState.ACTIVE_DISABLED]
  delete finalProps[ComponentThemeState.CHECKED]
  delete finalProps[ComponentThemeState.CHECKED_DISABLED]
  delete finalProps[ComponentThemeState.SELECTED]
  delete finalProps[ComponentThemeState.SELECTED_DISABLED]
  delete finalProps[ComponentThemeState.DISABLED]

  if (props[ComponentState.VALID])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.VALID] };

  if (props[ComponentState.INVALID])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.INVALID] };

  if (props[ComponentState.ACTIVE])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.ACTIVE] };

  if (props[ComponentState.CHECKED])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.CHECKED] };

  if (props[ComponentState.SELECTED])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.SELECTED] };

  if (props[ComponentState.DISABLED])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.DISABLED] };

  if (props[ComponentState.DISABLED] && props[ComponentState.ACTIVE])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.ACTIVE_DISABLED] };

  if (props[ComponentState.DISABLED] && props[ComponentState.CHECKED])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.CHECKED_DISABLED] };

  if (props[ComponentState.DISABLED] && props[ComponentState.SELECTED])
    finalProps = { ...finalProps, ...configProps[ComponentThemeState.SELECTED_DISABLED] };

  return finalProps;
}
