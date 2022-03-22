import { ComponentManager, ComponentTheme, HTMLInputProps, ParentComponent, SoperioComponent, splitComponentProps, useFirstRender, useMultiPartComponentConfig, } from "@soperio/components";

import React from "react";
import { ComponentProps, ExtendConfig } from "./types";
import defaultConfig from "./config"

const COMPONENT_ID = "Soperio.Switch";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface SwitchProps extends ComponentProps, ParentComponent, HTMLInputProps {
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
  ...props
}: SwitchProps, ref) => {
  const firstRender = useFirstRender();

  const checkedstyle = props.checked ? {
    transform: "translateX(-100%)"
  } : {};

  const styles = useMultiPartComponentConfig(COMPONENT_ID, theme, config, { variant, corners, size }, props);

  const [soperioProps, inputProps] = splitComponentProps(props)

  console.log(styles);
  console.log(inputProps);
  return (
    <label

      {...styles["switch"]} > {/* Container */}

      <input type="checkbox" name="switch" id="switch"
        w="0"
        h="0"
        hidden
        defaultChecked={props.checked}
        ref={ref} {...inputProps} />

      <span
        display="block"
        position="relative"
        cursor="pointer"
        // bgColor={checked ? "blue" : "grey"}

        transition={firstRender ? "none" : "all"}
        easing={props.checked ? "out" : "linear"}
        duration="300"
        shadow=" 0 0 10px grey"

        {...styles["track"]}
      > { /* Track */}

        <span

          position="absolute"
          ms={props.checked ? "calc(100% - 2px)" : "2px"}
          
          transition={firstRender ? "none" : "all"}
          easing={props.checked ? "out" : "linear"}
          duration="300"
          // style={checkedstyle}
          {...styles["thumb"]}
        > {/* thumb */}

        </span>

      </span>

      {/* <span {...styles["label"]}> label

  </span>*/}

    </label>
  );
});

// interface CardHeaderProps extends SoperioComponent, ParentComponent
// {
//   showBorder?: boolean;
//   borderWidth?: OrString<"full" | "padded">;
// };

// const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({
//   showBorder,
//   borderWidth,
//   children,
//   ...props }, ref) =>
// {
//   const colorTheme = useColorTheme();
//   const styles = useMultiPartStyles();

//   return (
//     // Style should be flex with space between children
//     // So that we get title + fill space + toolbar/more button
//     <>
//       <div
//         px="7"
//         py="3"
//         ref={ref}
//         borderColor={colorTheme.border1}
//         borderB={showBorder && borderWidth === "full" ? true : "0"}
//         {...styles.header}
//         {...props}
//       >
//         {children}
//       </div>
//       {showBorder && borderWidth !== "full" && <div borderT borderColor={colorTheme.border1} mx={borderWidth === "padded" ? "7" : borderWidth as SpacingPositive} />}
//     </>
//   );
// });

// interface CardBodyProps extends SoperioComponent, ParentComponent
// {
//   scrollable?: boolean, // If fixed height
// };

// const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(({ children, ...props }, ref) =>
// {
//   const styles = useMultiPartStyles();

//   return (
//     <div px="7" py="5" fontSize="sm" {...styles.body} {...props} ref={ref}>
//       {children}
//     </div>
//   );
// });

// interface CardFooterProps extends SoperioComponent, ParentComponent
// {
//   showBorder?: boolean;
//   borderWidth?: OrString<"full" | "padded">;
//   align?: "right" | "left" | "center";
// };

// const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({
//   showBorder,
//   borderWidth,
//   children,
//   ...props }, ref) =>
// {
//   const colorTheme = useColorTheme();
//   const styles = useMultiPartStyles();

//   return (
//     // Style should be flex with space between children
//     // So that we get title + fill space + toolbar/more button
//     <React.Fragment>
//       {showBorder && borderWidth !== "full" && <div borderT borderColor={colorTheme.border1} mx={borderWidth === "padded" ? "7" : borderWidth as SpacingPositive} />}
//       <div
//         px="7"
//         py="3"
//         ref={ref}
//         borderColor={colorTheme.border1}
//         borderT={showBorder && borderWidth === "full" ? true : "0"}
//         {...styles.footer}
//         {...props}
//       >
//         {children}
//       </div>
//     </React.Fragment>
//   );
// });


// const CardNamespace = Object.assign(Card, { Header: CardHeader, Body: CardBody, Footer: CardFooter });

// export { CardNamespace as Card };

// CardTitle : icon + title + subtitle, stack = vertical or horizontal
// Card Toolbar
// Card More menu

// CardTabMenu => nav menu
// CardTabbedContent => content from nav menu, with animation transition

// Toggle cardbody/ Default collapsed

// Loading state

// Sticky card header (no idea how to do this)


// Tile component : just a simple rounded white bg card with default padding
