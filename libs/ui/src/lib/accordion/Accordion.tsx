import { ComponentManager, ComponentTheme, HTMLDivProps, MultiPartStyleProvider, ParentComponent, SoperioComponent, useMultiPartComponentConfig, useMultiPartStyles } from "@soperio/react";
import { SpacingPositive, useColorTheme } from "@soperio/react";
import { OrString } from "@soperio/react";
import React, { useId } from "react";
import { ComponentProps, ExtendConfig } from "./types";
import defaultConfig from "./config"
import { IS_DEV } from "@soperio/utils"
import { Button } from "../button";
import { createContext } from "@soperio/components";
import { AnimatePresence, motion } from "framer-motion";

const COMPONENT_ID = "Soperio.Accordion";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)


const [AccordionContextProvider, useAccordionContext] = createContext<AccordionContext>()

export interface AccordionContext extends ComponentProps, ParentComponent, HTMLDivProps {
  expanded: false | number | string,
  setExpanded: any,
  allowMultiple: boolean
  accordionAnimation: any,
  expandIcon?: React.ReactNode,
  collapseIcon?: React.ReactNode

}


export interface AccordionProps extends ComponentProps, ParentComponent, HTMLDivProps {
  theme?: ComponentTheme;
  config?: ExtendConfig,
  expandIcon?: React.ReactNode,
  collapseIcon?: React.ReactNode,
  allowMultiple?: boolean
}


function ExpandSvg() {
  return <svg w="24px" h="24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </svg>
}

function CollapseSvg() {
  return <svg w="24px" h="24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,13H5V11H19V13Z" />
  </svg>
}


const AccordionContainer = React.forwardRef<HTMLDivElement, AccordionProps>(({
  variant,
  corners,
  expandIcon = <ExpandSvg />,
  collapseIcon = <CollapseSvg />,
  allowMultiple = false,
  theme = "default",
  config,
  children,
  ...props
}: AccordionProps, ref) => {

  const styles = useMultiPartComponentConfig(COMPONENT_ID, theme, config, { variant, corners }, props)


  const [expanded, setExpanded] = React.useState<false | number | string>(0);


  const accordionAnimation = {
    open: {
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
  }

  const context = {
    expanded,
    setExpanded,
    accordionAnimation,
    expandIcon,
    collapseIcon,
    allowMultiple
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
  const { setExpanded, expanded, accordionAnimation, collapseIcon, expandIcon, allowMultiple } = useAccordionContext()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const id = useId()


  function handleClick() {
    if (allowMultiple)
      setIsOpen(!isOpen)
    else
      setExpanded(expanded===id ? false : id)
  }
console.log(isOpen,expanded);
  const show = isOpen || expanded === id

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
          {show ? collapseIcon : expandIcon}
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
  show:boolean,
  accordionAnimation?:any,
 };

export const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(({show, children,accordionAnimation, ...props }, ref) => {
  const styles = useMultiPartStyles();

  return (

    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="open"
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



