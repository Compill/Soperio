import { OrString, ParentComponent, SoperioComponent, SpacingPositive, useColorTheme, useFirstRender, useMultiPartStyles } from "@soperio/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Button } from "../button";
import { useAccordionContext } from "./AccordionContext";

export interface AccordionItemProps extends SoperioComponent, ParentComponent
{
  showBorder?: boolean;
  borderWidth?: OrString<"full" | "padded">;
  label: React.ReactNode,
  isOpen?: boolean
};

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(({
  showBorder,
  borderWidth,
  label,
  isOpen,
  children,
  ...props }, ref) =>
{
  const firstRender = useFirstRender()
  const colorTheme = useColorTheme()
  const styles = useMultiPartStyles()
  const {
    setExpanded,
    expanded,
    accordionAnimation,
    collapseIcon,
    expandIcon,
    allowMultiple,
    expandIconRotationOnOpen,
    itemStyle,
    itemHeaderStyle,
    itemHeaderLabelStyle,
    itemHeaderCollapseButtonStyle,
    itemContentStyle
  } = useAccordionContext()
  const [ _isOpen, setIsOpen ] = React.useState(isOpen ?? false)
  const id = React.useId()

  const handleClick = React.useCallback(() =>
  {
    if (allowMultiple)
      setIsOpen(!_isOpen)
    else
      setExpanded(expanded === id ? false : id)
  }, [ id, _isOpen, allowMultiple, expanded, setExpanded ])

  const show = _isOpen || expanded === id

  return (
    <div {...styles.item} {...itemStyle}>
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
            {firstRender && (
              <>
                {expandIcon && collapseIcon && (show ? collapseIcon : expandIcon)}
                {!collapseIcon && expandIconRotationOnOpen !== undefined && (show ? <div transform rotateZ={expandIconRotationOnOpen}>{expandIcon}</div> : expandIcon) }
                {!collapseIcon && expandIconRotationOnOpen === undefined && expandIcon}
              </>
            )}
            {!firstRender && (
              <>
                {expandIcon && collapseIcon && (show ? collapseIcon : expandIcon)}
                {!collapseIcon && expandIconRotationOnOpen !== undefined && (
                  <motion.div
                    animate={show ? "open" : "close"}
                    variants={accordionAnimation}
                  >
                    {expandIcon}
                  </motion.div>
                )}
                {!collapseIcon && expandIconRotationOnOpen === undefined && expandIcon}
              </>
            )}
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
