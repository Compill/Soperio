import { ComponentManager, ComponentTheme, HTMLDivProps, MultiPartStyleProvider, ParentComponent, Rotate, SoperioComponent, SpacingPositive, useMultiPartComponentConfig } from "@soperio/react";
import { IS_DEV } from "@soperio/utils";
import React from "react";
import { AccordionContextProvider } from "./AccordionContext";
import { AccordionItem } from "./AccordionItem";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Soperio.Accordion";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface AccordionProps extends ComponentProps, ParentComponent, HTMLDivProps
{
  theme?: ComponentTheme;
  config?: ExtendConfig,
  expandIcon?: React.ReactNode,
  expandIconRotationOnOpen?: Rotate,
  collapseIcon?: React.ReactNode,
  allowMultiple?: boolean,
  gap?: false | SpacingPositive,
  itemHeaderStyle?: SoperioComponent,
  itemHeaderLabelStyle?: SoperioComponent,
  itemHeaderCollapseButtonStyle?: SoperioComponent,
  itemContentStyle?: SoperioComponent,
}

function ExpandAddSvg()
{
  return <svg w="24px" h="24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </svg>
}

function CollapseMinusSvg()
{
  return <svg w="24px" h="24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,13H5V11H19V13Z" />
  </svg>
}

function ExpandArrowDownSvg()
{
  return <svg w="24px" h="24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
  </svg>
}


const AccordionContainer = React.forwardRef<HTMLDivElement, AccordionProps>(({
  variant,
  corners,
  expandIcon = <ExpandArrowDownSvg />,
  expandIconRotationOnOpen = "180",
  collapseIcon = false,
  allowMultiple = false,
  itemHeaderStyle,
  itemHeaderLabelStyle,
  itemHeaderCollapseButtonStyle,
  itemContentStyle,
  gap,
  theme = "default",
  config,
  children,
  ...props
}: AccordionProps, ref) =>
{
  const id = React.useId()
  const styles = useMultiPartComponentConfig(COMPONENT_ID, theme, config, { variant, corners }, props)
  const [ expanded, setExpanded ] = React.useState<false | number | string>(0);

  const accordionAnimation = {
    expanded: {
      opacity: 1, height: "auto",
      transition: {
        duration: 0.5,
        ease: [ 0.24, 0.62, 0.23, 0.98 ]
      }
    },
    collapsed: {
      opacity: 0, height: 0,
      transition: {
        duration: 0.5,
        ease: [ 0.24, 0.62, 0.23, 0.98 ]
      }
    },
    open: {
      rotate: [0, parseInt(expandIconRotationOnOpen)],
      transition: {
        duration: 0.5,
        ease: [ 0.24, 0.62, 0.23, 0.98 ]
      }
    },
    close: {
      rotate: [parseInt(expandIconRotationOnOpen), 0],
      transition: {
        duration: 0.5,
        ease: [ 0.24, 0.62, 0.23, 0.98 ]
      }
    },
  }

  const context = {
    expanded,
    setExpanded,
    accordionAnimation,
    expandIconRotationOnOpen,
    expandIcon,
    collapseIcon,
    allowMultiple,
    itemHeaderStyle,
    itemHeaderLabelStyle,
    itemHeaderCollapseButtonStyle,
    itemContentStyle,
  }

  return (
    <div
      ref={ref}
      {...styles.accordion}
      spaceY={gap}
      {...props}
    >
      <AccordionContextProvider value={context}>
        <MultiPartStyleProvider value={styles}  >
          {children}
        </MultiPartStyleProvider>
      </AccordionContextProvider>
    </div>
  );
});

export const Accordion = Object.assign(AccordionContainer, { AccordionItem: AccordionItem });

if (IS_DEV)
  Accordion.displayName = "Soperio Accordion"
else
  Accordion.displayName = "Accordion"
