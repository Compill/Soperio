import { ParentComponent, SoperioComponent, Width, Height } from "@soperio/react";

export interface SidebarProps extends SoperioComponent, ParentComponent
{
  side?: "start" | "end" | "top" | "bottom",
  sidebarWidth?: Width,
  sidebarHeight?: Height,
  closeOnMaskClick?: boolean,
  closeOnEsc?: boolean,
  show: boolean,
  size?: string,
  onClose?: () => void;
}
