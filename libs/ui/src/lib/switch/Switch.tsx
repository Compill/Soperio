import { ComponentManager, ComponentTheme, HTMLInputProps, ParentComponent, splitComponentProps, useFirstRender, useMultiPartComponentConfig, } from "@soperio/react";

import React from "react";
import { ComponentProps, ExtendConfig } from "./types";
import defaultConfig from "./config"

const COMPONENT_ID = "Soperio.Switch";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface SwitchProps extends ComponentProps, ParentComponent, Omit<HTMLInputProps, "size"> {
  theme?: ComponentTheme;
  config?: ExtendConfig
}

/**
 *
 *
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(({
  variant,
  corners,
  size,
  theme = "default",
  config,
  children,
  onMouseDown,
  onClick,
  ...props
}: SwitchProps, ref) => {
  const firstRender = useFirstRender();

  const preventFocus = React.useCallback((event:any) => {
    event.preventDefault();
    onMouseDown && onMouseDown(event);
  }, [onMouseDown]);

  const looseFocus = React.useCallback((event:any) => {
    (document.activeElement as HTMLElement).blur();
    onClick && onClick(event);
  }, [onClick]);

  const styles = useMultiPartComponentConfig(COMPONENT_ID, theme, config, { variant, corners, size }, props);

  const [soperioProps, inputProps] = splitComponentProps(props)

  return (
    <label
      {...styles["switch"]}
      {...soperioProps}> {/* Container */}

      <input type="checkbox" name="switch" id="switch"
        w="0"
        h="0"
        hidden
        checked={props.checked}
        onMouseDown={preventFocus}
        onClick={looseFocus}
        ref={ref}
        {...inputProps} />

      <span
        transition={firstRender ? "none" : "all"}
        shadow=" 0 0 10px grey"
        {...styles["track"]}
      > 

        <span
          transition={firstRender ? "none" : "all"}

          {...styles["thumb"]}
        > 
          
        </span>
        
      </span>
      <span {...styles["label"]}>
            {children}


          </span>


    </label>
  );
});
