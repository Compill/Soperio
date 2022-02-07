import { SoperioComponent, useDarkMode } from "@soperio/core";
import { ColorTheme } from "@soperio/theming";
import { IS_DEV } from "@soperio/utils";
import deepmerge from "deepmerge";
import React from "react";
import { BaseComponentConfig, ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";
import { ComponentState } from "../ComponentStates";
import { Soperio } from "../Soperio";

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

export function useComponentConfig<T extends SoperioComponent, P extends ComponentConfig<T>>(
  component = "",
  theme: ColorTheme,
  customConfig: ExtendComponentConfig<T, P> | undefined,
  componentConfig: KeysOf<P>,
  props?: T): T
{
  const [defaultConfig] = React.useState(() => Soperio.getComponentConfig(component));
  const darkMode = useDarkMode();

  console.log("default config", defaultConfig)

  if (!defaultConfig && IS_DEV)
    console.log(`[Soperio] ${component} default config does not exist. Make sure to register it by calling Soperio.registerComponent().`);

  let config = null

  if (customConfig)
  {
    const c = runIfFn<ComponentConfig<T>>(customConfig.config, theme, darkMode) as ComponentConfig<T>

    if (customConfig.mode === "extends")
      config = deepmerge(runIfFn(defaultConfig, theme, darkMode) ?? {}, c as Partial<T>) as T;
    else
      config = c;
  }
  else if (defaultConfig)
  {
    config = runIfFn<ComponentConfig<T>>(defaultConfig, theme, darkMode);
  }

  console.log("step 1 config", config)
  console.log("step 1 config default variants", (config as any)["defaultVariants"])

  if (config)
    return mergeProps(config as BaseComponentConfig<T>, componentConfig, props) as T;

  return {} as T;
}

// Get the right set of soperio props from the config variants (variant, size, corners, ...)
function mergeProps<T extends SoperioComponent, P extends ComponentConfig<T>>(config: BaseComponentConfig<T>, componentConfig: KeysOf<P>, props: any): OmitStates<T>
{
  console.log("merge props", config)
  // Let's start with the component default values
  let finalProps = { ...(config.defaultProps as T)};

  console.log("finalProps 0", finalProps)

  // Now remove the default so that we can override the defaults with the other "variants"
  // Like variant, size, borders, shape, etc...
  delete config.defaultProps

  const defaultVariants = config.defaultVariants
  delete config.defaultVariants

  const c = config as any
  console.log("config", config)
  console.log("component config", componentConfig)

  const variants = c.variants

  for (const key in componentConfig)
  {
    const variant = variants[key]

    console.log("variant", key, variant)

    const configProps = variant ? (variant as any)[componentConfig[key] ?? defaultVariants?.[key]] : null;
    console.log("variant", key, configProps)
    if (configProps)
      finalProps = deepmerge(finalProps, configProps) as T
  }

  console.log("finalProps 1", finalProps)

  return mergeStateProps(finalProps, props)
}

// Final step : merge the props with the state props
// checked, selected, disabled, ...
function mergeStateProps<T extends SoperioComponent>(configProps: any, props: any): OmitStates<T>
{
  let finalProps = {...configProps};

  delete finalProps[ComponentState.VALID]
  delete finalProps[ComponentState.INVALID]
  delete finalProps[ComponentState.ACTIVE]
  delete finalProps[ComponentState.ACTIVE_DISABLED]
  delete finalProps[ComponentState.CHECKED]
  delete finalProps[ComponentState.CHECKED_DISABLED]
  delete finalProps[ComponentState.SELECTED]
  delete finalProps[ComponentState.SELECTED_DISABLED]
  delete finalProps[ComponentState.DISABLED]

  if (props[ComponentState.VALID])
    finalProps = { ...finalProps, ...configProps[ComponentState.VALID] };

  if (props[ComponentState.INVALID])
    finalProps = { ...finalProps, ...configProps[ComponentState.INVALID] };

  if (props[ComponentState.ACTIVE])
    finalProps = { ...finalProps, ...configProps[ComponentState.ACTIVE], ...(configProps[ComponentState.DISABLED] ? configProps[ComponentState.ACTIVE_DISABLED] : null)};

  if (props[ComponentState.CHECKED])
    finalProps = { ...finalProps, ...configProps[ComponentState.CHECKED], ...(configProps[ComponentState.DISABLED] ? configProps[ComponentState.CHECKED_DISABLED] : null) };

  if (props[ComponentState.SELECTED])
    finalProps = { ...finalProps, ...configProps[ComponentState.SELECTED], ...(configProps[ComponentState.DISABLED] ? configProps[ComponentState.SELECTED_DISABLED] : null) };

  if (props[ComponentState.DISABLED])
    finalProps = { ...finalProps, ...configProps[ComponentState.DISABLED] };

  return finalProps as OmitStates<T>;
}
