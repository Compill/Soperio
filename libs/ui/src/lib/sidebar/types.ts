import { ParentComponent, SoperioComponent } from "@soperio/components";

export interface SidebarProps extends SoperioComponent, ParentComponent
{
  side?: "start" | "end" | "top" | "bottom",
  closeOnMaskClick?: boolean,
  closeOnEsc?: boolean,
  show: boolean,
  size?: string,
  onClose?: () => void;
}
