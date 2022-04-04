import { applyTransparenceToRGBColor } from "@soperio/utils";
import { ColorTheme } from "./ColorTheme";
import { Theme } from "./Theme";

const breakpoints = {
  default: "0px",
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1560px',
};

const opacity = {
  "0": "0",
  "1": "0.01",
  "2": "0.02",
  "3": "0.03",
  "4": "0.04",
  "5": "0.05",
  "6": "0.06",
  "7": "0.07",
  "8": "0.08",
  "9": "0.09",
  "10": "0.1",
  "11": "0.11",
  "12": "0.12",
  "13": "0.13",
  "14": "0.14",
  "15": "0.15",
  "16": "0.16",
  "17": "0.17",
  "18": "0.18",
  "19": "0.19",
  "20": "0.2",
  "21": "0.21",
  "22": "0.22",
  "23": "0.23",
  "24": "0.24",
  "25": "0.25",
  "26": "0.26",
  "27": "0.27",
  "28": "0.28",
  "29": "0.29",
  "30": "0.3",
  "31": "0.31",
  "32": "0.32",
  "33": "0.33",
  "34": "0.34",
  "35": "0.35",
  "36": "0.36",
  "37": "0.37",
  "38": "0.38",
  "39": "0.39",
  "40": "0.4",
  "41": "0.41",
  "42": "0.42",
  "43": "0.43",
  "44": "0.44",
  "45": "0.45",
  "46": "0.46",
  "47": "0.47",
  "48": "0.48",
  "49": "0.49",
  "50": "0.5",
  "51": "0.51",
  "52": "0.52",
  "53": "0.53",
  "54": "0.54",
  "55": "0.55",
  "56": "0.56",
  "57": "0.57",
  "58": "0.58",
  "59": "0.59",
  "60": "0.6",
  "61": "0.61",
  "62": "0.62",
  "63": "0.63",
  "64": "0.64",
  "65": "0.65",
  "66": "0.66",
  "67": "0.67",
  "68": "0.68",
  "69": "0.69",
  "70": "0.7",
  "71": "0.71",
  "72": "0.72",
  "73": "0.73",
  "74": "0.74",
  "75": "0.75",
  "76": "0.76",
  "77": "0.77",
  "78": "0.78",
  "79": "0.79",
  "80": "0.8",
  "81": "0.81",
  "82": "0.82",
  "83": "0.83",
  "84": "0.84",
  "85": "0.85",
  "86": "0.86",
  "87": "0.87",
  "88": "0.88",
  "89": "0.89",
  "90": "0.9",
  "91": "0.91",
  "92": "0.92",
  "93": "0.93",
  "94": "0.94",
  "95": "0.95",
  "96": "0.96",
  "97": "0.97",
  "98": "0.98",
  "99": "0.99",
  "100": "1"
};

const spacing = {
  px: '1px',
  '0': '0',
  '0.5': '0.125rem',
  '1': '0.25rem',
  '1.5': '0.375rem',
  '2': '0.5rem',
  '2.5': '0.625rem',
  '3': '0.75rem',
  '3.5': '0.875rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
  '11': '2.75rem',
  '12': '3rem',
  '14': '3.5rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '28': '7rem',
  '32': '8rem',
  '36': '9rem',
  '40': '10rem',
  '44': '11rem',
  '48': '12rem',
  '52': '13rem',
  '56': '14rem',
  '60': '15rem',
  '64': '16rem',
  '72': '18rem',
  '80': '20rem',
  '96': '24rem',
};

function negative(positive: any)
{
  const neg: any = {};

  for (const key in positive)
    neg["-" + key] = "-" + positive[key];

  return neg;
}

function prefix(config: Record<string, string>, prefix: string): Record<string, string>
{
  const newConfig: Record<string, string> = {};

  Object.keys(config).forEach((key: string) =>
  {
    newConfig[prefix + key] = config[key];
  });

  return newConfig;
}

const defaultColorTheme: ColorTheme = {
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
}


// TODO Rename 2xl, 3xl, ... to x2, x3, x4, ...
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
    transparent: 'transparent',
    current: 'currentColor',

    black: '#000',
    white: '#fff',

    "gray-100": '#f7fafc',
    "gray-200": '#edf2f7',
    "gray-300": '#e2e8f0',
    "gray-400": '#cbd5e0',
    "gray-500": '#a0aec0',
    "gray-600": '#718096',
    "gray-700": '#4a5568',
    "gray-800": '#2d3748',
    "gray-900": '#1a202c',

    "coolGray-50": '#f9fafb',
    "coolGray-100": '#f3f4f6',
    "coolGray-200": '#e5e7eb',
    "coolGray-300": '#d1d5db',
    "coolGray-400": '#9ca3af',
    "coolGray-500": '#6b7280',
    "coolGray-600": '#4b5563',
    "coolGray-700": '#374151',
    "coolGray-800": '#1f2937',
    "coolGray-900": '#111827',

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

    "red-100": '#fff5f5',
    "red-200": '#fed7d7',
    "red-300": '#feb2b2',
    "red-400": '#fc8181',
    "red-500": '#f56565',
    "red-600": '#e53e3e',
    "red-700": '#c53030',
    "red-800": '#9b2c2c',
    "red-900": '#742a2a',

    "orange-100": '#fffaf0',
    "orange-200": '#feebc8',
    "orange-300": '#fbd38d',
    "orange-400": '#f6ad55',
    "orange-500": '#ed8936',
    "orange-600": '#dd6b20',
    "orange-700": '#c05621',
    "orange-800": '#9c4221',
    "orange-900": '#7b341e',

    "yellow-100": '#fffff0',
    "yellow-200": '#fefcbf',
    "yellow-300": '#faf089',
    "yellow-400": '#f6e05e',
    "yellow-500": '#ecc94b',
    "yellow-600": '#d69e2e',
    "yellow-700": '#b7791f',
    "yellow-800": '#975a16',
    "yellow-900": '#744210',


    "green-100": '#f0fff4',
    "green-200": '#c6f6d5',
    "green-300": '#9ae6b4',
    "green-400": '#68d391',
    "green-500": '#48bb78',
    "green-600": '#38a169',
    "green-700": '#2f855a',
    "green-800": '#276749',
    "green-900": '#22543d',

    "teal-100": '#e6fffa',
    "teal-200": '#b2f5ea',
    "teal-300": '#81e6d9',
    "teal-400": '#4fd1c5',
    "teal-500": '#38b2ac',
    "teal-600": '#319795',
    "teal-700": '#2c7a7b',
    "teal-800": '#285e61',
    "teal-900": '#234e52',

    "blue-100": '#ebf8ff',
    "blue-200": '#bee3f8',
    "blue-300": '#90cdf4',
    "blue-400": '#63b3ed',
    "blue-500": '#4299e1',
    "blue-600": '#3182ce',
    "blue-700": '#2b6cb0',
    "blue-800": '#2c5282',
    "blue-900": '#2a4365',

    "indigo-100": '#ebf4ff',
    "indigo-200": '#c3dafe',
    "indigo-300": '#a3bffa',
    "indigo-400": '#7f9cf5',
    "indigo-500": '#667eea',
    "indigo-600": '#5a67d8',
    "indigo-700": '#4c51bf',
    "indigo-800": '#434190',
    "indigo-900": '#3c366b',

    "purple-100": '#faf5ff',
    "purple-200": '#e9d8fd',
    "purple-300": '#d6bcfa',
    "purple-400": '#b794f4',
    "purple-500": '#9f7aea',
    "purple-600": '#805ad5',
    "purple-700": '#6b46c1',
    "purple-800": '#553c9a',
    "purple-900": '#44337a',

    "pink-100": '#fff5f7',
    "pink-200": '#fed7e2',
    "pink-300": '#fbb6ce',
    "pink-400": '#f687b3',
    "pink-500": '#ed64a6',
    "pink-600": '#d53f8c',
    "pink-700": '#b83280',
    "pink-800": '#97266d',
    "pink-900": '#702459',

    "sky-50": '#f0f9ff',
    "sky-100": '#e0f2fe',
    "sky-200": '#bae6fd',
    "sky-300": '#7dd3fc',
    "sky-400": '#38bdf8',
    "sky-500": '#0ea5e9',
    "sky-600": '#0284c7',
    "sky-700": '#0369a1',
    "sky-800": '#075985',
    "sky-900": '#0c4a6e',
  },
  colorThemes: {
    default: defaultColorTheme,
    success: {
      ...defaultColorTheme,
      default: "emerald-500",
      defaultHover: "emerald-600",
      defaultActive: "emerald-600",
      defaultDisabled: "emerald-300",

      light: applyTransparenceToRGBColor("#10b981", 10), //emerald-50,
      lightActive: "emerald-600",
      lightHover: "emerald-500",
      lightDisabled: "emerald-50",
    },
    pink: {
      ...defaultColorTheme,
      default: "pink-500",
      defaultHover: "pink-600",
      defaultActive: "pink-600",
      defaultDisabled: "pink-300",

      light: applyTransparenceToRGBColor("#ed64a6", 10), //pink-500,
      lightActive: "pink-600",
      lightHover: "pink-600",
      lightDisabled: "pink-50",
    },
    neutral: {
      ...defaultColorTheme,
      default: "coolGray-400",
      defaultHover: "coolGray-500",
      defaultActive: "coolGray-500",
      defaultDisabled: "coolGray-300",

      light: applyTransparenceToRGBColor("#a0aec0", 10), //coolGray-500,
      lightActive: "coolGray-500",
      lightHover: "coolGray-500",
      lightDisabled: "coolGray-200",

      // textLight1: "root.text-color-1",
      // textLight2: "root.text-color-2",
      // textLight3: "root.text-color-3",
      // textLight4: "root.text-color-4",
      // textLightDisabled: "coolGray-300",

      // textDark1: "root.text-color-inverse-1",
      // textDark2: "root.text-color-inverse-2",
      // textDark3: "root.text-color-inverse-3",
      // textDark4: "root.text-color-inverse-4",
      // textDarkDisabled: "root.text-color-inverse-disabled",
    },
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
      "bg-color-1": "coolGray-500",
      "bg-color-2": "coolGray-600",
      "bg-color-3": "coolGray-700",
      "bg-color-4": "coolGray-800",
      "bg-color-5": "coolGray-900",
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

  breakpoints: breakpoints,
  border: {
    radius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      'xxl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    width: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
  },
  effects: {
    boxShadow: {
      xs: '0 0 0 1px var(--so-shadowed-color, rgba(0, 0, 0, 0.05))',
      sm: '0 1px 2px 0 var(--so-shadowed-color, rgba(0, 0, 0, 0.05))',
      md: '0 1px 3px 0 var(--so-shadowed-color, rgba(0, 0, 0, 0.1)), 0 1px 2px 0 var(--so-shadowed-color, rgba(0, 0, 0, 0.06))',
      default: '0 4px 6px -1px var(--so-shadowed-color, rgba(0, 0, 0, 0.1)), 0 2px 4px -1px var(--so-shadowed-color, rgba(0, 0, 0, 0.06))',
      lg: '0 10px 15px -3px var(--so-shadowed-color, rgba(0, 0, 0, 0.1)), 0 4px 6px -2px var(--so-shadowed-color, rgba(0, 0, 0, 0.05))',
      xl: '0 20px 25px -5px var(--so-shadowed-color, rgba(0, 0, 0, 0.1)), 0 10px 10px -5px var(--so-shadowed-color, rgba(0, 0, 0, 0.04))',
      x2: '0 25px 50px -12px var(--so-shadowed-color, rgba(0, 0, 0, 0.25))',
      inner: 'inset 0 2px 4px 0 var(--so-shadowed-color, rgba(0, 0, 0, 0.06))',
      outline: '0 0 0 3px var(--so-shadowed-color, rgba(66, 153, 225, 0.5))',
      none: 'none',
    }
  },
  flexbox: {
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    gridAutoColumns: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gridAutoRows: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      'span-full': '1 / -1',
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-full': '1 / -1',
    },
    gridTemplateColumns: {
      none: 'none',
      '1': 'repeat(1, minmax(0, 1fr))',
      '2': 'repeat(2, minmax(0, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      '5': 'repeat(5, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))',
      '7': 'repeat(7, minmax(0, 1fr))',
      '8': 'repeat(8, minmax(0, 1fr))',
      '9': 'repeat(9, minmax(0, 1fr))',
      '10': 'repeat(10, minmax(0, 1fr))',
      '11': 'repeat(11, minmax(0, 1fr))',
      '12': 'repeat(12, minmax(0, 1fr))',
    },
    gridTemplateRows: {
      none: 'none',
      '1': 'repeat(1, minmax(0, 1fr))',
      '2': 'repeat(2, minmax(0, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      '5': 'repeat(5, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
    },
  },
  interactivity: {
    outline: {
      none: ['2px solid transparent', '2px'],
      white: ['2px dotted white', '2px'],
      black: ['2px dotted black', '2px'],
    }
  },
  filters: {
    blur: {
      ...spacing,
      none: "0",
      sm: "4px",
      md: "8px",
      default: "12px",
      lg: "16px",
      xl: "24px",
      "2x": "40px",
      "3x": "64px",
    },
    brightness: {
      "0": "0",
      "25": "0.25",
      "50": "0.5",
      "75": "0.75",
      "90": "0.9",
      "95": "0.95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.50",
      "200": "2",
    },
    contrast: {
      "0": "0",
      "25": "0.25",
      "50": "0.5",
      "75": "0.75",
      "90": "0.9",
      "95": "0.95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.50",
      "200": "2",
    },
    dropShadow: {
      sm: "drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))",
      default: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
      md: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
      lg: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      xl: "drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
      "2x": "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))",
      none: "drop-shadow(0 0 #0000)",
    },
    grayscale: {
      "0": "0",
      default: "100%",
    },
    hueRotate: {
      "0": "0deg",
      "15": "15deg",
      "30": "30deg",
      "60": "60deg",
      "90": "90deg",
      "180": "180deg",
    },
    invert: {
      "0": "0",
      default: "100%",
    },
    saturate: {
      "0": "0",
      "25": "0.25",
      "50": "0.5",
      "75": "0.75",
      "90": "0.9",
      "95": "0.95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.50",
      "200": "2",
    },
    sepia: {
      "0": "0",
      default: "100%",
    },
    backdropBlur: {
      ...spacing,
      none: "0",
      sm: "4px",
      md: "8px",
      default: "12px",
      lg: "16px",
      xl: "24px",
      "2x": "40px",
      "3x": "64px",
    },
    backdropBrightness: {
      "0": "0",
      "25": "0.25",
      "50": "0.5",
      "75": "0.75",
      "90": "0.9",
      "95": "0.95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.50",
      "200": "2",
    },
    backdropContrast: {
      "0": "0",
      "25": "0.25",
      "50": "0.5",
      "75": "0.75",
      "90": "0.9",
      "95": "0.95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.50",
      "200": "2",
    },
    backdropGrayscale: {
      "0": "0",
      default: "100%",
    },
    backdropHueRotate: {
      "0": "0deg",
      "15": "15deg",
      "30": "30deg",
      "60": "60deg",
      "90": "90deg",
      "180": "180deg",
    },
    backdropInvert: {
      "0": "0",
      default: "100%",
    },
    backdropOpacity: {
      ...opacity
    },
    backdropSaturate: {
      "0": "0",
      "25": "0.25",
      "50": "0.5",
      "75": "0.75",
      "90": "0.9",
      "95": "0.95",
      "100": "1",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.50",
      "200": "2",
    },
    backdropSepia: {
      "0": "0",
      default: "100%",
    }
  },
  opacity: {
    ...opacity
  },
  sizing: {
    height: {
      auto: 'auto',
      ...spacing,
      full: '100%',
      screen: '100vh',
    },
    maxHeight: {
      full: '100%',
      screen: '100vh',
    },
    maxWidth: {
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
      ...prefix(breakpoints, "screen-"),
    },
    minHeight: {
      '0': '0',
      full: '100%',
      screen: '100vh',
    },
    minWidth: {
      '0': '0',
      full: '100%',
    },
    width: {
      auto: 'auto',
      ...spacing,
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
    }
  },
  spacing: {
    positive: {
      ...spacing,
    },
    positiveNegative: {
      ...spacing,
      ...negative(spacing)
    },
  },
  transform: {
    scale: {
      '0': '0',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      '0': '0',
      '1': '1deg',
      '2': '2deg',
      '3': '3deg',
      '6': '6deg',
      '12': '12deg',
      '45': '45deg',
      '90': '90deg',
      '180': '180deg',
    },
    translate: {
      ...spacing,
      ...negative(spacing),
      '-full': '-100%',
      '-1/2': '-50%',
      '1/2': '50%',
      full: '100%',
    },
    skew: {
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      '0': '0',
      '1': '1deg',
      '2': '2deg',
      '3': '3deg',
      '6': '6deg',
      '12': '12deg',
    },
  },
  transition: {
    transitionProperty: {
      none: 'none',
      all: 'all',
      default: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    ease: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    duration: {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms',
    },
    delay: {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms',
    },
    animation: {
      none: 'none',
      spin: '1s linear infinite',
      ping: '1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: '2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: '1s infinite',
    },
    keyframes: {
      spin: `
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      `,
      ping: `
        75%, 100% {
          transform: scale(2);
          opacity: 0;
        }
      `,
      pulse: `
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: .5;
        }
      `,
      bounce: `
        0%, 100% {
          transform: translateY(-25%);
          animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        50% {
          transform: translateY(0);
          animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
      `,
    },
  },
  typography: {
    font: {
      sans: "sans",
      serif: "serif",
      mono: "mono"
    },
    // Second argument is for line-height
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', "1.25rem"],
      md: ['1rem', "1.5rem"],
      base: ['1rem', "1.5rem"],
      lg: ['1.125rem', "1.75rem"],
      xl: ['1.25rem', "1.75rem"],
      x2: ['1.5rem', "2rem"],
      x3: ['1.875rem', "2.25rem"],
      x4: ['2.25rem', "2.5rem"],
      x5: ['3rem', "1"],
      x6: ['3.75rem', "1"],
      x7: ['4.5rem', "1"],
      x8: ['6rem', "1"],
      x9: ['8rem', "1"],
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      '3': '.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
    },
  }
};
