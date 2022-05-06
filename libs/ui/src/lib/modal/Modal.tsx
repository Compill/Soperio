import { ComponentManager, ComponentTheme, HTMLDivProps, MultiPartStyleProvider, ParentComponent, SoperioComponent, useDirection, useFirstRender, useMultiPartComponentConfig, useMultiPartStyles, usePrevious } from "@soperio/react";
import { SpacingPositive, useColorTheme } from "@soperio/react";
import { OrString } from "@soperio/react";
import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { ComponentProps, ExtendConfig } from "./types";
import defaultConfig from "./config"
import { IS_DEV } from "@soperio/utils"
import { Button } from "../button";
import { createContext } from "@soperio/components";
import { motion } from "framer-motion";

const COMPONENT_ID = "Soperio.Modal";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)


const [ModalContextProvider, useModalContext] = createContext<ModalProps>()
//TODO impossible de overirder les valeurs de position de base de sopério

export interface ModalProps extends Omit<ComponentProps, "position">, ParentComponent, Omit<HTMLDivProps, "position"> {
  theme?: ComponentTheme;
  config?: ExtendConfig,
  closeOnMaskClick?: boolean,
  closeOnEsc?: boolean,
  closeOnBgClick?: boolean,
  show: boolean,
  onClose?: () => void,
  position?: "top" | "center" | "bottom" | string,
  opacity?:string
}

/**
 *
 *
 */
const ModalContainer = React.forwardRef<HTMLDivElement, ModalProps>(({
  variant,
  corners,
  theme = "default",
  config,
  onClose,
  closeOnBgClick = true,
  closeOnEsc = true,
  position = "center",
  show = false,
  opacity ="80",
  children,
  ...props
}: ModalProps, ref) => {
 
  const styles = useMultiPartComponentConfig(COMPONENT_ID, theme, config, { variant, corners }, props)

  const animate = show ? "visible" : "hidden"
  const modalAnimation = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    exit: { opacity: 0, scale: 0 }
  }
  const context = {
    onClose,
    show
  }

  const positionX = position === "bottom" ? "end" : "start"

  function handleClick(event: any) {
    event.stopPropagation()
    if (closeOnBgClick) onClose?.()
  }

/**
 * Close modal on esc Key if closeOnEsc is true
 *
 */
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27 && closeOnEsc) {
        onClose!()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])


  return (

    ReactDOM.createPortal(
      <motion.div
        animate={animate}
        variants={modalAnimation}
        initial='hidden'
        tabIndex={-1}
      >
        <div
          onClick={handleClick}
          pointerEvents={show ? "auto" : "none"}
          bgOpacity={opacity}
          {...styles.modal}
          {...props}
          ref={ref}>
          <div
            alignItems={position === "center" ? position : positionX}
            mt={position}
            {...styles.modalWrapper}
            {...props}>
            <div
              onClick={(e) => e.stopPropagation()}
              bgOpacity="100"
              {...styles.modalContent}
              {...props}
            >
              <ModalContextProvider value={context}>
                <MultiPartStyleProvider value={styles}  >
                  {children}
                </MultiPartStyleProvider>
              </ModalContextProvider>
            </div>
          </div>
        </div>
      </motion.div>
      , document.body)
  );
});

export interface ModalHeaderProps extends SoperioComponent, ParentComponent {
  showBorder?: boolean;
  borderWidth?: OrString<"full" | "padded">;

};

export const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(({
  showBorder,
  borderWidth,
  children,
  ...props }, ref) => {
  const colorTheme = useColorTheme();
  const styles = useMultiPartStyles();
  const { onClose } = useModalContext()

  function closeModal(event: any) {
    event.stopPropagation()
    onClose!()

  }

  return (
    // Style should be flex with space between children
    // So that we get title + fill space + toolbar/more button
    <div dflex justifyContent="between" >
      <div
        px="4"
        py="2"
        ref={ref}
        borderColor={colorTheme.border1}
        borderB={showBorder && borderWidth === "full" ? true : "0"}
        {...styles.header}
        {...props}
      >
        {children}
      </div>
      <Button mx="2"
        my="2"
        p='0'
        h="24px"
        variant="borderless"
        onClick={closeModal}
      >
        <svg
          w="24px"
          h="24px"
          viewBox="0 0 24 24">
          <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
      </Button>
      {showBorder && borderWidth !== "full" && <div borderT borderColor={colorTheme.border1} mx={borderWidth === "padded" ? "7" : borderWidth as SpacingPositive} />}
    </div>
  );
});

export interface ModalBodyProps extends SoperioComponent, ParentComponent {
  scrollable?: boolean, // If fixed height
};

export const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(({ children, ...props }, ref) => {
  const styles = useMultiPartStyles();

  return (
    <div px="7" py="5" fontSize="sm" {...styles.body} {...props} ref={ref}>
      {children}
    </div>
  );
});

export interface ModalFooterProps extends SoperioComponent, ParentComponent {
  showBorder?: boolean;
  borderWidth?: OrString<"full" | "padded">;
  align?: "right" | "left" | "center";
};

export const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(({
  showBorder,
  borderWidth,
  children,
  ...props }, ref) => {
  const colorTheme = useColorTheme();
  const styles = useMultiPartStyles();

  return (
    // Style should be flex with space between children
    // So that we get title + fill space + toolbar/more button
    <React.Fragment>
      {showBorder && borderWidth !== "full" && <div borderT borderColor={colorTheme.border1} mx={borderWidth === "padded" ? "7" : borderWidth as SpacingPositive} />}
      <div
        px="7"
        py="3"
        ref={ref}
        borderColor={colorTheme.border1}
        borderT={showBorder && borderWidth === "full" ? true : "0"}
        {...styles.footer}
        {...props}
      >
        {children}
      </div>
    </React.Fragment>
  );
});

export const Modal = Object.assign(ModalContainer, { Header: ModalHeader, Body: ModalBody, Footer: ModalFooter });

if (IS_DEV)
  Modal.displayName = "Soperio Modal"
else
  Modal.displayName = "Modal"

// ModalTitle : icon + title + subtitle, stack = vertical or horizontal
// Modal Toolbar
// Modal More menu

// ModalTabMenu => nav menu
// ModalTabbedContent => content from nav menu, with animation transition

// Toggle modalbody/ Default collapsed

// Loading state

// Sticky modal header (no idea how to do this)


// Tile component : just a simple rounded white bg modal with default padding
