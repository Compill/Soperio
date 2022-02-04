import { SoperioComponent, useDarkMode } from "@soperio/core";
import { ColorTheme } from "@soperio/theming";
import { IS_DEV } from "@soperio/utils";
import deepmerge from "deepmerge";
import React from "react";
import { CustomComponentConfigFn, SoperioComponentConfig } from "../ComponentConfig";
import { ComponentState } from "../ComponentStates";
import { Soperio } from "../Soperio";

type KeysOf<T> =
{
  [Property in keyof T]: string
}

export function useComponentConfig<T extends SoperioComponentConfig, P extends SoperioComponent>(
  component = "",
  theme: ColorTheme,
  customConfig: CustomComponentConfigFn<T> | undefined,
  componentConfig: KeysOf<T>,
  props?: P): P
{
  const [defaultConfig] = React.useState(() => Soperio.getComponentConfig(component));
  const darkMode = useDarkMode();

  if (!defaultConfig && IS_DEV)
    console.log(`[Soperio] ${component} default config does not exist. Make sure to register it by calling Soperio.registerComponent().`);

  let config = null

  if (customConfig)
  {
    const c = customConfig(theme, darkMode);

    if (c.mode === "extends")
      config = deepmerge(defaultConfig ? defaultConfig(theme, darkMode) : {}, c.config) as T;
    else
      config = c.config;
  }
  else if (defaultConfig)
  {
    config = defaultConfig(theme, darkMode) as T;
  }

  if (config)
    return mergeProps(config, componentConfig, props) as P;

  return {} as P;
}

// Get the right set of soperio props from the config variants (variant, size, corners, ...)
function mergeProps<T extends SoperioComponent>(config: SoperioComponentConfig, componentConfig: KeysOf<T>, props: any): T
{
  // Let's start with the component default values
  let finalProps = { ...(config.default as T)};

  // Now remove the default so that we can override the defaults with the other "variants"
  // Like variant, size, borders, shape, etc...
  delete config.default

  for (const key in componentConfig)
  {
    const variant = config[key]

    const configProps = variant ? (variant as any)[componentConfig[key]] : null;

    if (configProps)
      finalProps = deepmerge(finalProps, configProps) as T
  }

  return mergeStateProps(finalProps, props)
}

// Final step : merge the props with the state props
// checked, selected, disabled, ...
function mergeStateProps<T extends SoperioComponent>(configProps: any, props: any): T
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

  return finalProps as T;
}
