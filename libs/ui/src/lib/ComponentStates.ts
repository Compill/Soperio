import { SoperioComponent } from "@soperio/core";

export const ComponentState = {
  ACTIVE: "active",
  CHECKED: "checked",
  DISABLED: "disabled",
  INVALID: "invalid",
  SELECTED: "selected",
  VALID: "valid",
  ACTIVE_DISABLED: "activeDisabled",
  CHECKED_DISABLED: "checkedDisabled",
  SELECTED_DISABLED: "selectedDisabled",
}

export interface ActiveState { active?: boolean; }
export interface CheckedState { checked?: boolean; }
export interface DisabledState { disabled?: boolean; }
export interface InvalidState { invalid?: boolean; }
export interface SelectedState { selected?: boolean; }
export interface ValidState { valid?: boolean; }
export interface ActiveDisabledState { activeDisabled?: boolean; }
export interface CheckedDisabledState { checkedDisabled?: boolean; }
export interface SelectedDisabledState { selectedDisabled?: boolean; }

export interface ActiveThemeProps<T = SoperioComponent> { active?: T; };
export interface CheckedThemeProps<T = SoperioComponent> { checked?: T; };
export interface DisabledThemeProps<T = SoperioComponent> { disabled?: T; };
export interface InvalidThemeProps<T = SoperioComponent> { invalid?: T; };
export interface SelectedThemeProps<T = SoperioComponent> { selected?: T; };
export interface ValidThemeProps<T = SoperioComponent> { valid?: T; };
export interface ActiveDisabledThemeProps<T = SoperioComponent> { checkedDisabled?: T; };
export interface CheckedDisabledThemeProps<T = SoperioComponent> { checkedDisabled?: T; };
export interface SelectedDisabledThemeProps<T = SoperioComponent> { selectedDisabled?: T; };
