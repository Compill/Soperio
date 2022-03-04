import { ColorTheme } from "./ColorTheme";
import { applyTransparenceToRGBColor } from "@soperio/utils";

export const defaultColorTheme: ColorTheme = {
  default: "sky-500",
  defaultHover: "sky-600",
  defaultActive: "sky-600",
  defaultDisabled: "sky-300",

  // light: applyTransparenceToRGBColor("#7dd3fc", 15), // sky-300
  light: applyTransparenceToRGBColor("#0ea5e9", 15), // sky-500
  // light: "sky-100", // sky-300
  lightActive: "sky-600",
  lightHover: "sky-500",
  lightDisabled: "sky-50",

  textDark1: "root.text-color-1",
  textDark2: "root.text-color-2",
  textDark3: "root.text-color-3",
  textDark4: "root.text-color-4",
  textDarkDisabled: "coolGray-300",

  textLight1: "root.text-color-inverse-1",
  textLight2: "root.text-color-inverse-2",
  textLight3: "root.text-color-inverse-3",
  textLight4: "root.text-color-inverse-4",
  textLightDisabled: "root.text-color-inverse-disabled",

  background1: "root.bg-color-1",
  background2: "root.bg-color-2",
  background3: "root.bg-color-3",
  background4: "root.bg-color-4",
  background5: "root.bg-color-5",
  backgroundDisabled: "root.color-disabled",

  border0: "root.border-color-0",
  border1: "root.border-color-1",
  borderDisabled: "root.border-color-disabled",

  shadow: "#000000",
};
