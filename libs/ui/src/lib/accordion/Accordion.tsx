import { createContext, useFirstRender } from "@soperio/components";
import { ComponentManager, ComponentTheme, HTMLDivProps, MultiPartStyleProvider, OrString, ParentComponent, SoperioComponent, SpacingPositive, useColorTheme, useMultiPartComponentConfig, useMultiPartStyles } from "@soperio/react";
import { IS_DEV } from "@soperio/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useId } from "react";
import { Button } from "../button";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Soperio.Accordion";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)


const [ AccordionContextProvider, useAccordionContext ] = createContext<AccordionContext>()

export interface AccordionContext extends ComponentProps, ParentComponent, HTMLDivProps
{
  expanded: false | number | string,
  setExpanded: any,
  allowMultiple: boolean
  accordionAnimation: any,
  expandIcon?: React.ReactNode,
  expandRotationIcon?: number,
  collapseIcon?: React.ReactNode,
  setIsRotate?: any,
  isRotate?: number
}

export interface AccordionProps extends ComponentProps, ParentComponent, HTMLDivProps
{
  theme?: ComponentTheme;
  config?: ExtendConfig,
  expandIcon?: React.ReactNode,
  expandRotationIcon?: number,
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
  expandRotationIcon = 180,
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
      rotate: [ 0, expandRotationIcon ],
      transition: {
        duration: 0.5,
        ease: [ 0.24, 0.62, 0.23, 0.98 ]
      }
    },
    close: {
      rotate: [ expandRotationIcon, 0 ],
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
    expandRotationIcon,
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
      {...props}>
      <AccordionContextProvider value={context}>
        <MultiPartStyleProvider value={styles}  >
          {children}
        </MultiPartStyleProvider>
      </AccordionContextProvider>
    </div>
  );
});

export interface AccordionItemProps extends SoperioComponent, ParentComponent
{
  showBorder?: boolean;
  borderWidth?: OrString<"full" | "padded">;
  label: React.ReactNode,
};

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(({
  showBorder,
  borderWidth,
  children,
  label,
  ...props }, ref) =>
{
  const firstRender = useFirstRender()
  const colorTheme = useColorTheme();
  const styles = useMultiPartStyles();
  const {
    setExpanded,
    expanded,
    accordionAnimation,
    collapseIcon,
    expandIcon,
    allowMultiple,
    expandRotationIcon,
    itemHeaderStyle,
    itemHeaderLabelStyle,
    itemHeaderCollapseButtonStyle,
    itemContentStyle
  } = useAccordionContext()
  const [ isOpen, setIsOpen ] = React.useState<boolean>(false)

  const id = useId()

  const handleClick = React.useCallback(() =>
  {
    if (allowMultiple)
      setIsOpen(!isOpen)
    else
      setExpanded(expanded === id ? false : id)
  }, [ allowMultiple, expanded, id, isOpen, setExpanded ])

  const show = isOpen || expanded === id

  const handleIcon = React.useCallback((firstRender: boolean) =>
  {
    if (firstRender)
      return expandIcon

    if (expandIcon && collapseIcon)
      return show ? collapseIcon : expandIcon

    else if (!collapseIcon && expandRotationIcon)
      return <motion.div
        animate={show ? "open" : "close"}
        variants={accordionAnimation}
      >
        {expandIcon}
      </motion.div>

    else return expandIcon
  }, [ accordionAnimation, collapseIcon, expandIcon, expandRotationIcon, show ])

  return (
    <div>
      <div
        onClick={handleClick}
        dflex
        justifyContent="between"
        w="full"
        alignItems="center"
        cursor="pointer"
        ref={ref}
        {...styles.itemHeader}
        {...itemHeaderStyle}
        {...props}>
        <div
          borderB={showBorder && borderWidth === "full" ? true : "0"}
          {...styles.itemHeaderLabel}
          {...itemHeaderLabelStyle}
        >
          {label}
        </div>

        {children && (
          <Button onClick={handleClick} {...styles.itemHeaderCollapseButton} {...itemHeaderCollapseButtonStyle}>
            {handleIcon(firstRender)}
          </Button>
        )}

        {showBorder && borderWidth !== "full" && <div borderT borderColor={colorTheme.border1} mx={borderWidth === "padded" ? "7" : borderWidth as SpacingPositive} />}
      </div >

      {children && (
        <AccordionContent show={show} accordionAnimation={accordionAnimation} {...itemContentStyle}>
          {children}
        </AccordionContent>
      )}
    </div>
  );
});


export interface AccordionContentProps extends SoperioComponent, ParentComponent
{
  show: boolean,
  accordionAnimation?: any,
};

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(({ show, children, accordionAnimation, ...props }, ref) =>
{
  const styles = useMultiPartStyles();

  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="expanded"
          exit="collapsed"
          variants={accordionAnimation}
          style={{ overflow: "hidden" }}
        >
          <div overflow="hidden" {...styles.itemContent} {...props} ref={ref}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export const Accordion = Object.assign(AccordionContainer, { AccordionItem: AccordionItem });

if (IS_DEV)
  Accordion.displayName = "Soperio Accordion"
else
  Accordion.displayName = "Accordion"
