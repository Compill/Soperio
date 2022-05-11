import { SoperioComponent } from "@soperio/theming";

export const ComponentState = {
  ACTIVE: "active",
  CHECKED: "checked",
  DISABLED: "disabled",
  INVALID: "invalid",
  SELECTED: "selected",
  VALID: "valid",
}

export const ComponentThemeState = {
  ACTIVE: "stateActive",
  CHECKED: "stateChecked",
  DISABLED: "stateDisabled",
  INVALID: "stateInvalid",
  SELECTED: "stateSelected",
  VALID: "stateValid",
  ACTIVE_DISABLED: "stateActiveDisabled",
  CHECKED_DISABLED: "stateCheckedDisabled",
  SELECTED_DISABLED: "stateSelectedDisabled",
}

export interface ActiveState { active?: boolean; }
export interface CheckedState { checked?: boolean; }
export interface DisabledState { disabled?: boolean; }
export interface InvalidState { invalid?: boolean; }
export interface SelectedState { selected?: boolean; }
export interface ValidState { valid?: boolean; }

export interface ActiveThemeProps<T = SoperioComponent> { stateActive?: T; };
export interface CheckedThemeProps<T = SoperioComponent> { stateChecked?: T; };
export interface DisabledThemeProps<T = SoperioComponent> { stateDisabled?: T; };
export interface InvalidThemeProps<T = SoperioComponent> { stateInvalid?: T; };
export interface SelectedThemeProps<T = SoperioComponent> { stateSelected?: T; };
export interface ValidThemeProps<T = SoperioComponent> { stateValid?: T; };
export interface ActiveDisabledThemeProps<T = SoperioComponent> { stateActiveDisabled?: T; };
export interface CheckedDisabledThemeProps<T = SoperioComponent> { stateCheckedDisabled?: T; };
export interface SelectedDisabledThemeProps<T = SoperioComponent> { stateSelectedDisabled?: T; };

export type ComponentStateProps<T = SoperioComponent> = Partial<ActiveThemeProps<T>
          & CheckedThemeProps<T>
          & DisabledThemeProps<T>
          & InvalidThemeProps<T>
          & SelectedThemeProps<T>
          & ValidThemeProps<T>
          & ActiveDisabledThemeProps<T>
          & CheckedDisabledThemeProps<T>
          & SelectedDisabledThemeProps<T>>

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NoStateProps {}
