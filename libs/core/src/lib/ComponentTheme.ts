import { ColorTheme } from "@soperio/theming";
import { OrString } from "@soperio/utils";

export type ComponentTheme = OrString<"default"> | ColorTheme;
