import { ComponentManager, ComponentTheme, HTMLDivProps, MultiPartStyleProvider, ParentComponent, SoperioComponent, useMultiPartComponentConfig, useMultiPartStyles, useFirstRender } from "@soperio/react";
import { SpacingPositive, useColorTheme } from "@soperio/react";
import { OrString } from "@soperio/react";
import React, { useId } from "react";
import { ComponentProps, ExtendConfig } from "./types";
import defaultConfig from "./config"
import { IS_DEV } from "@soperio/utils"
import { Button } from "../button";
import { createContext } from "@soperio/components";
import { AnimatePresence, motion, } from "framer-motion";

const COMPONENT_ID = "Soperio.Accordion";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)


const [AccordionContextProvider, useAccordionContext] = createContext<AccordionContext>()

export interface AccordionContext extends ComponentProps, ParentComponent, HTMLDivProps {
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


export interface AccordionProps extends ComponentProps, ParentComponent, HTMLDivProps {
  theme?: ComponentTheme;
  config?: ExtendConfig,
  expandIcon?: React.ReactNode,
  expandRotationIcon?: number,
  collapseIcon?: React.ReactNode,
  allowMultiple?: boolean
}


function ExpandAddSvg() {
  return <svg w="24px" h="24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </svg>
}

function CollapseMinusSvg() {
  return <svg w="24px" h="24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,13H5V11H19V13Z" />
  </svg>
}

function ExpandArrowDownSvg() {
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
  theme = "default",
  config,
  children,
  ...props
}: AccordionProps, ref) => {

  const styles = useMultiPartComponentConfig(COMPONENT_ID, theme, config, { variant, corners }, props)

  const [expanded, setExpanded] = React.useState<false | number | string>(0);


  const accordionAnimation = {
    expanded: {
      opacity: 1, height: "auto",
      transition: {
        duration: 0.5,
        ease: [0.24, 0.62, 0.23, 0.98]
      }
    },
    collapsed: {
      opacity: 0, height: 0,
      transition: {
        duration: 0.5,
        ease: [0.24, 0.62, 0.23, 0.98]
      }
    },
    open: {
      rotate: [0, expandRotationIcon],
      transition: {
        duration: 0.5,
        ease: [0.24, 0.62, 0.23, 0.98]
      }
    },
    close: {
      rotate: [expandRotationIcon , 0],
      transition: {
        duration: 0.5,
        ease: [0.24, 0.62, 0.23, 0.98]
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

  }



  return (

    <div
      ref={ref}
      {...styles.accordion}
      {...props}>
      <AccordionContextProvider value={context}>
        <MultiPartStyleProvider value={styles}  >
          {children}
        </MultiPartStyleProvider>
      </AccordionContextProvider>
    </div>

  );
});

export interface AccordionHeaderProps extends SoperioComponent, ParentComponent {
  showBorder?: boolean;
  borderWidth?: OrString<"full" | "padded">;
  label: React.ReactNode,
};

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionHeaderProps>(({
  showBorder,
  borderWidth,
  children,
  label,
  ...props }, ref) => {
  const colorTheme = useColorTheme();
  const styles = useMultiPartStyles();
  const { setExpanded, expanded, accordionAnimation, collapseIcon, expandIcon, allowMultiple, expandRotationIcon } = useAccordionContext()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const id = useId()

  function handleClick() {
    if (allowMultiple)
      setIsOpen(!isOpen)
    else
      setExpanded(expanded === id ? false : id)
  }

  
  const show = isOpen || expanded === id


  function HandleIcon(): any {
    if (expandIcon && collapseIcon)
      return show ? collapseIcon : expandIcon

    else if (!collapseIcon && expandRotationIcon)
      return <motion.div
        animate={show?"open":"close"}
        variants={accordionAnimation}
      >
        {expandIcon}
      </motion.div>

    else return expandIcon
  }

  return (

    <>
      <div onClick={handleClick} dflex justifyContent="between" w="full" alignItems="center" ref={ref} {...styles.accordionHeader} {...props}>
        <div
          mx="4"
          borderColor={colorTheme.border1}
          borderB={showBorder && borderWidth === "full" ? true : "0"}
        >
          {label}
        </div>
        <Button
          mx="4"
          p='0'
          h="24px"
          variant="borderless"
          onClick={handleClick}
        >
          <HandleIcon />
        </Button>
        {showBorder && borderWidth !== "full" && <div borderT borderColor={colorTheme.border1} mx={borderWidth === "padded" ? "7" : borderWidth as SpacingPositive} />}
      </div >
      <AccordionContent show={show} accordionAnimation={accordionAnimation}>
        {children}
      </AccordionContent>
    </>

  );
});


export interface AccordionContentProps extends SoperioComponent, ParentComponent {
  show: boolean,
  accordionAnimation?: any,
};

export const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(({ show, children, accordionAnimation, ...props }, ref) => {
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
          <div overflow="hidden" mx="4" py="4" fontSize="sm" {...styles.accordionContent} {...props} ref={ref}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});



export const Accordion = Object.assign(AccordionContainer, { Header: AccordionItem, Content: AccordionContent });

if (IS_DEV)
  Accordion.displayName = "Soperio Accordion"
else
  Accordion.displayName = "Accordion"



