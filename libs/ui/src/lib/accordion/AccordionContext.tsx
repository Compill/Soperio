import { createContext, HTMLDivProps, ParentComponent, Rotate, SoperioComponent } from "@soperio/react";
import React from "react";
import { ComponentProps } from "./types";

export const [ AccordionContextProvider, useAccordionContext ] = createContext<AccordionContext>()

export interface AccordionContext extends ComponentProps, ParentComponent, HTMLDivProps
{
  expanded: false | number | string,
  setExpanded: any,
  allowMultiple: boolean
  accordionAnimation: any,
  expandIcon?: React.ReactNode,
  expandIconRotationOnOpen?: Rotate,
  collapseIcon?: React.ReactNode,
  setIsRotate?: any,
  isRotate?: number,
  itemStyle?: SoperioComponent,
  itemHeaderStyle?: SoperioComponent,
  itemHeaderLabelStyle?: SoperioComponent,
  itemHeaderCollapseButtonStyle?: SoperioComponent,
  itemContentStyle?: SoperioComponent,
}
