import { SoperioComponent } from "@soperio/core";
import { createContext } from "./createContext";

const [StylesProvider, useStyles] = createContext<Record<string, SoperioComponent>>();

export { StylesProvider as MultiPartStyleProvider, useStyles as useMultiPartStyles };
