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

export interface ActiveThemeProps<T = SoperioComponent> { stateActive?: T; };
export interface CheckedThemeProps<T = SoperioComponent> { stateChecked?: T; };
export interface DisabledThemeProps<T = SoperioComponent> { stateDisabled?: T; };
export interface InvalidThemeProps<T = SoperioComponent> { stateInvalid?: T; };
export interface SelectedThemeProps<T = SoperioComponent> { stateSelected?: T; };
export interface ValidThemeProps<T = SoperioComponent> { stateValid?: T; };
export interface ActiveDisabledThemeProps<T = SoperioComponent> { stateActiveDisabled?: T; };
export interface CheckedDisabledThemeProps<T = SoperioComponent> { stateCheckedDisabled?: T; };
export interface SelectedDisabledThemeProps<T = SoperioComponent> { stateSelectedDisabled?: T; };
