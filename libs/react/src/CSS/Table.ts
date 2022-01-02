import { css, StyleProps } from "./utils";

export interface Table 
{
    borderCollapse?: true | "separate",
    tableLayout?: "auto" | "fixed"
}

export const TableMapping: StyleProps =
{
    borderCollapse: css("border-collapse", undefined, "collapse"),
    tableLayout: css("table-layout")
}