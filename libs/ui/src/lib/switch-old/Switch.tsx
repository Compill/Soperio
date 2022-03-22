// import { ComponentManager, ComponentTheme, HTMLInputProps, omitComponentProps, SoperioComponent, splitComponentProps, useComponentConfig, useFirstRender, useMultiPartComponentConfig } from "@soperio/components";
// import React from "react";
// import { ComponentProps, ExtendConfig } from "./types";
// import defaultConfig from "./config"

// const COMPONENT_ID = "Soperio.Switch0";

// ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

// export interface SwitchProps extends ComponentProps, Omit<HTMLInputProps, "size"> {
//   label?: string,
//   theme?: ComponentTheme;
//   config?: ExtendConfig;
// }

// /**
//  * A simple Switch to be used with or without a surrounding form.
//  * For using with Formik, please use formik/Switch instead
//  */
// export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>((
//   {
//     theme = "default",
//     label = "",
//     size = "lg",
//     variant = "default",
//     shape = "default",
//     config,
//     checked,
//     ...props
//   }:SwitchProps, ref) => {
//   const firstRender = useFirstRender();

//   const checkedstyle = checked ? {
//     transform: "translateX(-100%)"
//   } : {};

//   //const styles = useComponentConfig(COMPONENT_ID, theme, config, { variant, size, shape }, props)
//  const styles = useMultiPartComponentConfig(COMPONENT_ID, theme, config, { variant, size, shape }, props)


//   const [soperioProps, inputProps] = splitComponentProps(props)

//  console.log("props", config)
//   // console.log("props", soperioProps)
//   // console.log("props", inputProps)

//   return (
//     <label  {...styles["switch"]}> {/* Container */}

//       <div {...styles["track"]}> { /* Track */}

//         <span {...styles["thumb"]}> {/* thumb */}

//         </span>

//       </div>

//       <span {...styles["label"]}> {/* label */}

//       </span>

//     </label>

//   );
// });

// /*    <div {...soperioProps}>

//       <input type="checkbox" name="switch" id="switch"
//         w="0"
//         h="0"
//         hidden
//         defaultChecked={checked}
//         {...inputProps}
//         ref={ref} />
//       <label
//         w="75px"
//         h="40px"
//         display="block"
//         bgColor={checked ? "blue" : "grey"}
//         position="relative"
//         cursor="pointer"
//         transition={firstRender ? "none" : "all"}
//         easing={checked ? "out" : "linear"}
//         duration="300"
//         shadow=" 0 0 20px grey"
//         {...styles as SoperioComponent}

//       >
//         <div
//           top="4%"
//           bgColor="white"
//           position="absolute"
//           style={checkedstyle}
//           ms={checked ? "calc(100% - 5%)" : "5%"}
//           transition={firstRender ? "none" : "all"}
//           easing={checked ? "out" : "linear"}
//           duration="500"
//         // {...styles}
//         />
//       </label>
//   </div>*/