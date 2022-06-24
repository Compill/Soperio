import { SoperioComponent, useSurface, useDarkMode, useTheme, SurfaceSchemeSet } from "@soperio/theming";
import { IS_DEV } from "@soperio/utils";
import deepmerge from "deepmerge";
import { ThemingToken } from "libs/theming/src/lib/ThemingToken";
import { BaseComponentConfig, ComponentConfig, ExtendComponentConfig } from "../ComponentConfig";
import { ComponentManager } from "../ComponentManager";
import { ComponentState, ComponentThemeState } from "../ComponentStates";
import { ComponentTheme } from "../ComponentTheme";


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

type SS = Extract<keyof ThemingToken<"surfaces">, string> | SurfaceSchemeSet // TODO

function useMergedComponentConfig<T extends SoperioComponent>(component: string, surface: SS)
{
  const sTheme = useTheme()
  const darkMode = useDarkMode();
  const _surface = useSurface(surface);

  const componentTheme = sTheme.components?.[component]
  const defaultConfig = ComponentManager.getComponentConfig(component) as ComponentConfig<T>

  if (componentTheme)
  {
    return deepmerge(runIfFn<ComponentConfig<T>>(defaultConfig, _surface, darkMode) as any, runIfFn<ComponentConfig<T>>(componentTheme, _surface, darkMode) as any);
  }

  return runIfFn<ComponentConfig<T>>(defaultConfig, _surface, darkMode)
}

export function useComponentConfig2<T extends SoperioComponent, P extends ComponentConfig<T>>(
  component = "",
  surface: SS,
  customConfig: ExtendComponentConfig<P> | undefined,
  componentConfig: KeysOf<P> = {} as KeysOf<P>,
  props?: T): T
{
  // const [defaultConfig] = React.useState(() => ComponentManager.getComponentConfig(component) as ComponentConfig<T>);
  const defaultConfig = useMergedComponentConfig(component, surface)

  const darkMode = useDarkMode();

  if (!defaultConfig && IS_DEV)
    console.warn(`[Soperio] ${component} default config does not exist. Make sure to register it by calling Soperio.registerComponent().`);

  const _surface = useSurface(surface);

  let config

  if (customConfig)
  {
    const c = runIfFn<ComponentConfig<T>>(customConfig.config, _surface, darkMode) as ComponentConfig<T>

    if (customConfig.mode === "extends")
      config = deepmerge(runIfFn(defaultConfig, _surface, darkMode) ?? {}, c as Partial<T>) as T;
    else
      config = c;
  }
  else if (defaultConfig)
  {
    config = runIfFn<ComponentConfig<T>>(defaultConfig, _surface, darkMode);
  }

  if (config)
    return mergeProps(config as BaseComponentConfig<T>, componentConfig, props) as T;

  return {} as T;
}

// Get the right set of soperio props from the config traits (variant, size, corners, ...)
function mergeProps<T extends SoperioComponent, P extends ComponentConfig<T>>(config: BaseComponentConfig<T>, componentConfig: KeysOf<P>, props: any): OmitStates<T>
{
  // Let's start with the component default values
  let finalProps = { ...(config.defaultProps as T) };

  const defaultTraits = config.defaultTraits

  const c = config as any

  const traits = c.traits

  for (const key in componentConfig)
  {
    const variant = traits[key]

    const configProps = variant ? (variant as any)[componentConfig[key] ?? defaultTraits?.[key]] : null;

    if (configProps)
      finalProps = deepmerge(finalProps, configProps) as T
  }

  return mergeStateProps(finalProps, props)
}

// Final step : merge the props with the state props
// checked, selected, disabled, ...
function mergeStateProps<T extends SoperioComponent>(configProps: any, props: any): OmitStates<T>
{
  let finalProps = { ...configProps };

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

  if (props[ComponentState.DISABLED])
  {
    if (props[ComponentState.ACTIVE] || props[ComponentState.CHECKED] || props[ComponentState.SELECTED])
    {
      if (props[ComponentState.ACTIVE])
        finalProps = { ...finalProps, ...(configProps[ComponentThemeState.ACTIVE_DISABLED] ?? configProps[ComponentThemeState.ACTIVE]) };

      if (props[ComponentState.CHECKED])
        finalProps = { ...finalProps, ...(configProps[ComponentThemeState.CHECKED_DISABLED] ?? configProps[ComponentThemeState.CHECKED]) };

      if (props[ComponentState.SELECTED])
        finalProps = { ...finalProps, ...(configProps[ComponentThemeState.SELECTED_DISABLED] ?? configProps[ComponentThemeState.SELECTED]) };
    }
    else
    {
      finalProps = { ...finalProps, ...configProps[ComponentThemeState.DISABLED] };
    }
  }
  else
  {
    if (props[ComponentState.ACTIVE])
      finalProps = { ...finalProps, ...configProps[ComponentThemeState.ACTIVE] };

    if (props[ComponentState.CHECKED])
      finalProps = { ...finalProps, ...configProps[ComponentThemeState.CHECKED] };

    if (props[ComponentState.SELECTED])
      finalProps = { ...finalProps, ...configProps[ComponentThemeState.SELECTED] };
  }

  return finalProps as OmitStates<T>;
}
