import { ComponentManager, ComponentTheme, HTMLDivProps, MultiPartStyleProvider, ParentComponent, SoperioComponent, useMultiPartComponentConfig, useMultiPartStyles } from "@soperio/react";
import { SpacingPositive, useColorTheme } from "@soperio/react";
import { OrString } from "@soperio/react";
import React from "react";
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
  accordionAnimation: any,

}

const [AccordionContextItemProvider, useAccordionItemContext] = createContext<AccordionContextItem>()

export interface AccordionContextItem extends ComponentProps, ParentComponent, HTMLDivProps {
  isOpen: boolean,
  accordionAnimation
}

export interface AccordionProps extends ComponentProps, ParentComponent, HTMLDivProps {
  theme?: ComponentTheme;
  config?: ExtendConfig,
}


const AccordionContainer = React.forwardRef<HTMLDivElement, AccordionProps>(({
  variant,
  corners,
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
    accordionAnimation
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
  i?: false | number | string
};

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionHeaderProps>(({
  showBorder,
  borderWidth,
  children,
  label,
  i,
  ...props }, ref) => {
  const colorTheme = useColorTheme();
  const styles = useMultiPartStyles();
  const { setExpanded, expanded, accordionAnimation } = useAccordionContext()

  const isOpen = i === expanded

  const context = {
    isOpen,
    accordionAnimation
  }

  return (
    <AccordionContextItemProvider value={context}>
      <>
        <div dflex justifyContent="between" w="full" alignItems="center" ref={ref} {...styles.accordionHeader} {...props}>
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
            onClick={() => setExpanded(isOpen ? false : i!)}
          >
            <svg w="24px" h="24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
          </Button>
          {showBorder && borderWidth !== "full" && <div borderT borderColor={colorTheme.border1} mx={borderWidth === "padded" ? "7" : borderWidth as SpacingPositive} />}
        </div >
        <AccordionContent >
          {children}
        </AccordionContent>
      </>
    </AccordionContextItemProvider>
  );
});


export interface AccordionContentProps extends SoperioComponent, ParentComponent { };

export const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(({ children, ...props }, ref) => {
  const styles = useMultiPartStyles();
  const { isOpen, accordionAnimation, } = useAccordionItemContext()

  return (
    //TODO fix the animation du text --> text déroulant ?
    <AnimatePresence initial={false}>
      {isOpen && (
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



