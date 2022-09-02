import border from "./defaultTheme/border";
import breakpoints from "./defaultTheme/breakpoints";
import components from "./defaultTheme/components";
import effects from "./defaultTheme/effects";
import filters from "./defaultTheme/filters";
import flexbox from "./defaultTheme/flexbox";
import opacity from "./defaultTheme/opacity";
import sizing from "./defaultTheme/sizing";
import spacing from "./defaultTheme/spacing";
import traits from "./defaultTheme/traits";
import transform from "./defaultTheme/transform";
import transition from "./defaultTheme/transition";
import typography from "./defaultTheme/typography";
import { Theme } from "./Theme";



/*
TODO Root colors: only use RGB values (e.g. not theme values), since theme colors will be optional
*/


export const defaultTheme: Theme = {
  direction: "ltr",

  // Colors that will be added to :root {} in CSS
  // Since those are CSS vars, the prefix "--" will be added for each var
  // But you can just reference them in the code as "root.myvar" on any color prop,
  // "myvar" being the name of the color var
  darkMode: "light",
  darkModeFallback: "light",
  rootColors: {
    /* Required color vars by Soperio */
    /* Delete one of those and components will miss some colors :\ */
    /* Please only use RGB colors, the alpha component will be ignored */

    // Dark text colors if light theme, light colors if dark theme
    "text-color-1": "coolGray-900",
    "text-color-2": "coolGray-700",
    "text-color-3": "coolGray-500",
    "text-color-4": "coolGray-300",
    "text-color-disabled": "coolGray-300",

    // Light text colors if light theme, dark colors if dark theme
    "text-color-inverse-1": "#FFFFFF",
    "text-color-inverse-2": "coolGray-100",
    "text-color-inverse-3": "coolGray-200",
    "text-color-inverse-4": "coolGray-300",
    "text-color-inverse-disabled": "coolGray-300",

    // Light background colors if light theme, dark colors if dark theme
    "bg-color-1": "#FFFFFFFF",
    "bg-color-2": "coolGray-50",
    "bg-color-3": "coolGray-100",
    "bg-color-4": "coolGray-200",
    "bg-color-5": "coolGray-300",
    // Ex: the backround color of a disabled text input
    "bg-color-disabled": "coolGray-100",
    // Used to separate sections of your app
    // Example
    // The border between the left sidebar and the main content
    // Or the header and the subheader and the main content
    // Or the buttons of a toolbar
    "border-color-1": "coolGray-100",
    "border-color-2": "coolGray-200",
    "border-color-disabled": "#FFFFFF",

    "shadow-color": "#000000",


    /* End required colors */

    /* You can add your custom global color vars below */
    // Ex: "my-super-color": #123456
  },
  colors: {
    transparent: "transparent",
    current: "currentColor",

    black: "#000",
    white: "#fff",

    "black-alpha-100": "#000000FF",
    "black-alpha-95": "#000000F2",
    "black-alpha-90": "#000000E6",
    "black-alpha-85": "#000000D9",
    "black-alpha-80": "#000000CC",
    "black-alpha-75": "#000000BF",
    "black-alpha-70": "#000000B3",
    "black-alpha-65": "#000000A6",
    "black-alpha-60": "#00000099",
    "black-alpha-55": "#0000008C",
    "black-alpha-50": "#00000080",
    "black-alpha-45": "#00000073",
    "black-alpha-40": "#00000066",
    "black-alpha-35": "#00000059",
    "black-alpha-30": "#0000004D",
    "black-alpha-25": "#00000040",
    "black-alpha-20": "#00000033",
    "black-alpha-15": "#00000026",
    "black-alpha-10": "#0000001A",
    "black-alpha-05": "#0000000D",
    "black-alpha-0": "#00000000",

    "white-alpha-100": "#FFFFFFFF",
    "white-alpha-95": "#FFFFFFF2",
    "white-alpha-90": "#FFFFFFE6",
    "white-alpha-85": "#FFFFFFD9",
    "white-alpha-80": "#FFFFFFCC",
    "white-alpha-75": "#FFFFFFBF",
    "white-alpha-70": "#FFFFFFB3",
    "white-alpha-65": "#FFFFFFA6",
    "white-alpha-60": "#FFFFFF99",
    "white-alpha-55": "#FFFFFF8C",
    "white-alpha-50": "#FFFFFF80",
    "white-alpha-45": "#FFFFFF73",
    "white-alpha-40": "#FFFFFF66",
    "white-alpha-35": "#FFFFFF59",
    "white-alpha-30": "#FFFFFF4D",
    "white-alpha-25": "#FFFFFF40",
    "white-alpha-20": "#FFFFFF33",
    "white-alpha-15": "#FFFFFF26",
    "white-alpha-10": "#FFFFFF1A",
    "white-alpha-05": "#FFFFFF0D",
    "white-alpha-0": "#FFFFFF00",

    "gray-100": "#f7fafc",
    "gray-200": "#edf2f7",
    "gray-300": "#e2e8f0",
    "gray-400": "#cbd5e0",
    "gray-500": "#a0aec0",
    "gray-600": "#718096",
    "gray-700": "#4a5568",
    "gray-800": "#2d3748",
    "gray-900": "#1a202c",

    "coolGray-50": "#f9fafb",
    "coolGray-100": "#f3f4f6",
    "coolGray-200": "#e5e7eb",
    "coolGray-300": "#d1d5db",
    "coolGray-400": "#9ca3af",
    "coolGray-500": "#6b7280",
    "coolGray-600": "#4b5563",
    "coolGray-700": "#374151",
    "coolGray-800": "#1f2937",
    "coolGray-900": "#111827",

    "emerald-50": "#ecfdf5",
    "emerald-100": "#d1fae5",
    "emerald-200": "#a7f3d0",
    "emerald-300": "#6ee7b7",
    "emerald-400": "#34d399",
    "emerald-500": "#10b981",
    "emerald-600": "#059669",
    "emerald-700": "#047857",
    "emerald-800": "#065f46",
    "emerald-900": "#064e3b",

    "red-100": "#fff5f5",
    "red-200": "#fed7d7",
    "red-300": "#feb2b2",
    "red-400": "#fc8181",
    "red-500": "#f56565",
    "red-600": "#e53e3e",
    "red-700": "#c53030",
    "red-800": "#9b2c2c",
    "red-900": "#742a2a",

    "orange-100": "#fffaf0",
    "orange-200": "#feebc8",
    "orange-300": "#fbd38d",
    "orange-400": "#f6ad55",
    "orange-500": "#ed8936",
    "orange-600": "#dd6b20",
    "orange-700": "#c05621",
    "orange-800": "#9c4221",
    "orange-900": "#7b341e",

    "yellow-100": "#fffff0",
    "yellow-200": "#fefcbf",
    "yellow-300": "#faf089",
    "yellow-400": "#f6e05e",
    "yellow-500": "#ecc94b",
    "yellow-600": "#d69e2e",
    "yellow-700": "#b7791f",
    "yellow-800": "#975a16",
    "yellow-900": "#744210",


    "green-100": "#f0fff4",
    "green-200": "#c6f6d5",
    "green-300": "#9ae6b4",
    "green-400": "#68d391",
    "green-500": "#48bb78",
    "green-600": "#38a169",
    "green-700": "#2f855a",
    "green-800": "#276749",
    "green-900": "#22543d",

    "teal-100": "#e6fffa",
    "teal-200": "#b2f5ea",
    "teal-300": "#81e6d9",
    "teal-400": "#4fd1c5",
    "teal-500": "#38b2ac",
    "teal-600": "#319795",
    "teal-700": "#2c7a7b",
    "teal-800": "#285e61",
    "teal-900": "#234e52",

    "blue-100": "#ebf8ff",
    "blue-200": "#bee3f8",
    "blue-300": "#90cdf4",
    "blue-400": "#63b3ed",
    "blue-500": "#4299e1",
    "blue-600": "#3182ce",
    "blue-700": "#2b6cb0",
    "blue-800": "#2c5282",
    "blue-900": "#2a4365",

    "indigo-100": "#ebf4ff",
    "indigo-200": "#c3dafe",
    "indigo-300": "#a3bffa",
    "indigo-400": "#7f9cf5",
    "indigo-500": "#667eea",
    "indigo-600": "#5a67d8",
    "indigo-700": "#4c51bf",
    "indigo-800": "#434190",
    "indigo-900": "#3c366b",

    "purple-100": "#faf5ff",
    "purple-200": "#e9d8fd",
    "purple-300": "#d6bcfa",
    "purple-400": "#b794f4",
    "purple-500": "#9f7aea",
    "purple-600": "#805ad5",
    "purple-700": "#6b46c1",
    "purple-800": "#553c9a",
    "purple-900": "#44337a",

    "pink-100": "#fff5f7",
    "pink-200": "#fed7e2",
    "pink-300": "#fbb6ce",
    "pink-400": "#f687b3",
    "pink-500": "#ed64a6",
    "pink-600": "#d53f8c",
    "pink-700": "#b83280",
    "pink-800": "#97266d",
    "pink-900": "#702459",

    "sky-50": "#f0f9ff",
    "sky-100": "#e0f2fe",
    "sky-200": "#bae6fd",
    "sky-300": "#7dd3fc",
    "sky-400": "#38bdf8",
    "sky-500": "#0ea5e9",
    "sky-600": "#0284c7",
    "sky-700": "#0369a1",
    "sky-800": "#075985",
    "sky-900": "#0c4a6e",
  },
  palette: {

  },
  darkModeOverride: {
    rootColors: {
      /* Required color vars by Soperio */
      /* Delete one of those and components will miss some colors :\ */
      /* Please only use RGB colors, the alpha component will be ignored */

      // Dark text colors if light theme, light colors if dark theme
      "text-color-1": "#FFFFFF",
      "text-color-2": "#F9F9F9",
      "text-color-3": "#F0F0F0",
      "text-color-4": "#E9E9E9",
      "text-color-disabled": "#E0E0E0",

      // Light text colors if light theme, dark colors if dark theme
      "text-color-inverse-1": "coolGray-900",
      "text-color-inverse-2": "coolGray-800",
      "text-color-inverse-3": "coolGray-700",
      "text-color-inverse-4": "coolGray-600",
      "text-color-inverse-disabled": "coolGray-600",

      // Light background colors if light theme, dark colors if dark theme
      "bg-color-1": "coolGray-900",
      "bg-color-2": "coolGray-800",
      "bg-color-3": "coolGray-700",
      "bg-color-4": "coolGray-600",
      "bg-color-5": "coolGray-500",
      // Ex: the backround color of a disabled text input
      "bg-color-disabled": "coolGray-500",
      // Used to separate sections of your app
      // Example
      // The border between the left sidebar and the main content
      // Or the header and the subheader and the main content
      // Or the buttons of a toolbar
      "border-color-1": "coolGray-700",
      "border-color-2": "coolGray-800",
      "border-color-disabled": "#FFFFFF",

      "shadow-color": "#FFFFFF",


      /* End required colors */

      /* You can add your custom global color vars below */
      // Ex: "my-super-color": #123456
    }
  },

  breakpoints,
  border,
  effects,
  flexbox,
  filters,
  opacity,
  sizing,
  spacing,
  transform,
  transition,
  typography,
  traits,
};
