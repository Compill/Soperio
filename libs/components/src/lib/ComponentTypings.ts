import { Components } from "./Components";

export type ComponentTypings<Component extends keyof Components> =
{
    [key in keyof Components[Component]]?: Components[Component][key]
};

export type ResponsiveComponentProps<Component extends keyof Components> =
{
    [key in keyof Components[Component]]?: Components[Component][key]
};
