import { ParentComponent, SoperioComponent } from "@soperio/react";
import { Width, Height } from "@soperio/theming";

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
