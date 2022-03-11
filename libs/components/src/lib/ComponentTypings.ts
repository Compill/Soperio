export interface Components
{
    "Soperio.Badge":
    {

        variant: "default" | "light" | "outline" | "light-outline";
        size: "xs" | "sm" | "md" | "lg" | "xl" | "x2";
        shape: "default" | "rounded" | "pill" | "square";
    },
    "Soperio.Button":
    {
        variant?: "default" | "light" | "outline" | "link" | "borderless";
        size?: "sm" | "md" | "lg" | "xl" | "x2";
        corners?: "default" | "square" | "pill";
    },
    "Soperio.Card":
    {
        variant?: "default" | "bordered";
        corners?: "default" | "square" | "pill";
    },
    "Soperio.Checkbox":
    {
        size: "sm" | "md" | "lg" | "xl" | "x2";
        variant: "default" | "outline";
        shape: "square" | "default" | "circle";
    },
    "Soperio.Input":
    {
        size: "sm" | "md" | "lg" | "xl" | "x2";
        variant: "default" | "solid" | "underline";
        corners: "square" | "default" | "pill";
    },
    "Soperio.Radio":
    {
        size: "sm" | "md" | "lg" | "xl" | "x2";
        variant: "default" | "outline";
        shape: "square" | "default" | "circle";
        dotSize?: "sm" | "md" | "lg";
    },
    "Soperio.Select":
    {
        size: "sm" | "md" | "lg" | "xl" | "x2";
        variant: "default" | "solid" | "underline";
        corners: "square" | "default" | "pill";
    },
    "Soperio.Spinner":
    {
        variant?: "default" | "track",
        size?: "sm" | "md" | "lg" | "xl" | "x2";
    },
    "Soperio.TextArea":
    {

        size: "sm" | "md" | "lg" | "xl" | "x2";
        variant: "default" | "solid" | "underline";
        corners: "square" | "default" | "pill";
    },
}

export type ComponentTypings<Component extends keyof Components> =
    {
        [key in keyof Components[Component]]?: Components[Component][key]
    };