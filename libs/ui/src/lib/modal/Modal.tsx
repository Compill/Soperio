import { ComponentManager, ComponentTheme, createContext, HTMLDivProps, MultiPartStyleProvider, Opacity, OrString, ParentComponent, SoperioComponent, SpacingPositive, useColorTheme, useMultiPartComponentConfig, useMultiPartStyles } from "@soperio/react";
import { IS_DEV } from "@soperio/utils";
import { motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../button";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Soperio.Modal";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)


const [ ModalContextProvider, useModalContext ] = createContext<ModalProps>()
//TODO impossible de overirder les valeurs de position de base de sopério

export interface ModalProps extends Omit<ComponentProps, "position">, ParentComponent, Omit<HTMLDivProps, "position">
{
  theme?: ComponentTheme;
  config?: ExtendConfig,
  closeOnMaskClick?: boolean,
  closeOnEsc?: boolean,
  closeOnBgClick?: boolean,
  show: boolean,
  onClose?: () => void,
  position?: "top" | "center" | "bottom" | string,
  backdropOpacity?: Opacity
}

/**
 *
 *
 */
const ModalContainer = React.forwardRef<HTMLDivElement, ModalProps>(({
  variant,
  corners,
  size,
  theme = "default",
  config,
  onClose,
  closeOnBgClick: closeOnBackdropClick = true,
  closeOnEsc = true,
  position = "center",
  show = false,
  backdropOpacity = "50",
  children,
  ...props
}: ModalProps, ref) =>
{
  const styles = useMultiPartComponentConfig(COMPONENT_ID, theme, config, { variant, corners, size }, props)

  const animate = show ? "visible" : "hidden"
  const modalAnimation = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    exit: { opacity: 0, scale: 0 }
  }
  const context = { onClose, show }
  const positionX = position === "bottom" ? "end" : "start"

  const handleClick = React.useCallback((event: any) =>
  {
    event.stopPropagation()
    if (closeOnBackdropClick) onClose?.()
  }, [ closeOnBackdropClick, onClose ])

  /**
   * Close modal on esc Key if closeOnEsc is true
   *
   */
  React.useEffect(() =>
  {
    const close = (e) =>
    {
      if (e.keyCode === 27 && closeOnEsc)
      {
        onClose?.()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [ closeOnEsc, onClose ])

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
          position="fixed"
          w="100vw"
          h="100vh"
          top="0"
          start="0"
          z="1000"
          {...styles.backdrop}
          {...props}
          bgOpacity={backdropOpacity}
          ref={ref}>
          <div
            alignItems={position === "center" ? position : positionX}
            mt={position}
            position="fixed"
            w="100%"
            h="full"
            overflowX="hidden"
            overflowY="auto"
            outline="none"
            z="1050"
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
      </motion.div >
      , document.body)
  );
});

export interface ModalHeaderProps extends SoperioComponent, ParentComponent
{
  showBorder?: boolean;
  borderWidth?: OrString<"full" | "padded">;
};

export const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(({
  showBorder,
  borderWidth,
  children,
  ...props }, ref) =>
{
  const colorTheme = useColorTheme();
  const styles = useMultiPartStyles();
  const { onClose } = useModalContext()

  const closeModal = React.useCallback((event: any) =>
  {
    event.stopPropagation()
    onClose?.()
  }, [ onClose ])

  return (
    // Style should be flex with space between children
    // So that we get title + fill space + toolbar/more button
    <div dflex justifyContent="between" alignItems="center" {...styles.header}>
      <div
        ref={ref}
        borderB={showBorder && borderWidth === "full" ? true : "0"}
        {...styles.headerTitle}
        {...props}
      >
        {children}
      </div>

      <Button
        {...styles.headerCloseButton}
        onClick={closeModal}
      >
        <svg
          w="24px"
          h="24px"
          viewBox="0 0 24 24">
          <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
      </Button>

      {showBorder && borderWidth !== "full" && <div borderT borderColor={colorTheme.border1} mx={borderWidth === "padded" ? "4" : borderWidth as SpacingPositive} />}
    </div>
  );
});

export interface ModalBodyProps extends SoperioComponent, ParentComponent
{
  scrollable?: boolean, // If fixed height
};

export const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(({ children, ...props }, ref) =>
{
  const styles = useMultiPartStyles();

  return (
    <div {...styles.body} {...props} ref={ref}>
      {children}
    </div>
  );
});

export interface ModalFooterProps extends SoperioComponent, ParentComponent
{
  showBorder?: boolean;
  borderWidth?: OrString<"full" | "padded">;
  align?: "right" | "left" | "center";
};

export const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(({
  showBorder,
  borderWidth,
  children,
  ...props }, ref) =>
{
  const colorTheme = useColorTheme();
  const styles = useMultiPartStyles();

  return (
    // Style should be flex with space between children
    // So that we get title + fill space + toolbar/more button
    <React.Fragment>
      {showBorder && borderWidth !== "full" && <div borderT borderColor={colorTheme.border1} mx={borderWidth === "padded" ? "7" : borderWidth as SpacingPositive} />}
      <div
        ref={ref}
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
