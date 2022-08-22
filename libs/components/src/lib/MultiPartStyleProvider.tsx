import { createContext, SoperioComponent } from "@soperio/theming";

const [StylesProvider, useStyles] = createContext<Record<string, SoperioComponent>>();

export { StylesProvider as MultiPartStyleProvider, useStyles as useMultiPartStyles };
