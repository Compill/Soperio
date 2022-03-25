import { ParentComponent, SoperioComponent } from "@soperio/react";

export interface SidebarProps extends SoperioComponent, ParentComponent
{
  side?: "start" | "end" | "top" | "bottom",
  closeOnMaskClick?: boolean,
  closeOnEsc?: boolean,
  show: boolean,
  size?: string,
  onClose?: () => void;
}
