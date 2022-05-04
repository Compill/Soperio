import { ComponentManager, ComponentTheme, HTMLDivProps, MultiPartStyleProvider, ParentComponent, SoperioComponent, useDirection, useFirstRender, useMultiPartComponentConfig, useMultiPartStyles, usePrevious } from "@soperio/react";
import { SpacingPositive, useColorTheme } from "@soperio/react";
import { OrString } from "@soperio/react";
import React from "react";
import ReactDOM from "react-dom";
import { ComponentProps, ExtendConfig } from "./types";
import defaultConfig from "./config"
import { IS_DEV } from "@soperio/utils"

const COMPONENT_ID = "Soperio.Modal";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)


const DEFAULT_DURATION = "500";
const DEFAULT_EASING = "in";


export interface ModalProps extends ComponentProps, ParentComponent, HTMLDivProps {
  theme?: ComponentTheme;
  config?: ExtendConfig,
  closeOnMaskClick?: boolean,
  closeOnEsc?: boolean,
  show: boolean,
  onClose?: () => void;
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
  show = false,
  children,
  ...props
}: ModalProps, ref) => {
  const [internalShow, setInternalShow] = React.useState(false);
  const firstRender = useFirstRender();
  const direction = useDirection();
  const previousDirection = usePrevious(direction);
  const styles = useMultiPartComponentConfig(COMPONENT_ID, theme, config, { variant, corners }, props);

  const translateY = show ? "0" : "-full"
  const initTranslateY = "-full";

  React.useEffect(() => {
    if (show !== internalShow)
      setInternalShow(show);
  }, [show, internalShow, setInternalShow]);

//TODO voir pour OnClose car cela ferme le modal quand on clique dessus et vor pour transition
  return (

    ReactDOM.createPortal(
      <div
        transition={firstRender ? "none" : "colors"}
        onClick={onClose}
        pointerEvents={show ? "auto" : "none"}
        bgOpacity={internalShow ? 80 : 0}
        {...styles.modal}
        {...props}
        ref={ref}>
        <div
          {...styles.modalWrapper}
          transition={firstRender || "colors"}
          transform
          my={show? "24":"0"}
          bgOpacity={internalShow ? 100 : 0}
          easing={props.easing || DEFAULT_EASING}
          duration={props.duration || DEFAULT_DURATION}
          // translateY={previousDirection === direction ? translateY : initTranslateY}
          {...props}>
          <div
          hidden={internalShow ? false:true}
            {...styles.modalContent}
            {...props}
          >
            <MultiPartStyleProvider value={styles}>
              {children}
            </MultiPartStyleProvider>
          </div>
        </div>
      </div>, document.body)
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

  return (
    // Style should be flex with space between children
    // So that we get title + fill space + toolbar/more button
    <>
      <div
        px="7"
        py="3"
        ref={ref}
        borderColor={colorTheme.border1}
        borderB={showBorder && borderWidth === "full" ? true : "0"}
        {...styles.header}
        {...props}
      >
        {children}
      </div>
      {showBorder && borderWidth !== "full" && <div borderT borderColor={colorTheme.border1} mx={borderWidth === "padded" ? "7" : borderWidth as SpacingPositive} />}
    </>
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
