export interface Components
{
    "Soperio.Badge":
    {
        variants:
        {
            variant: "default" | "light" | "outline" | "light-outline";
            size: "xs" | "sm" | "md" | "lg" | "xl" | "x2";
            shape: "default" | "rounded" | "pill" | "square";
        }
    },
    "Soperio.Button": 
    {
        variants: 
        {
            variant?: "default" | "light" | "outline" | "link" | "borderless";
            size?: "sm" | "md" | "lg" | "xl" | "x2";
            corners?: "default" | "square" | "pill";
        }
    },
    "Soperio.Card": 
    {
        variants: 
        {
            variant?: "default" | "bordered";
            corners?: "default" | "square" | "pill";
        }
    },
    "Soperio.Checkbox":
    {
        variants:
        {
            otherNameThanSize: "sm" | "md" | "lg" | "xl" | "x2";
            variant: "default" | "outline";
            shape: "square" | "default" | "circle"
        }
    },
    "Soperio.Input":
    {
        variants:
        {
            size: "sm" | "md" | "lg" | "xl" | "x2";
            variant: "default" | "solid" | "underline";
            corners: "square" | "default" | "pill";
        };
    },
    "Soperio.Radio":
    {
        variants:
        {
            otherNameThanSize: "sm" | "md" | "lg" | "xl" | "x2";
            variant: "default" | "outline";
            shape: "square" | "default" | "circle";
            dotSize?: "sm" | "md" | "lg"
        };
    },
    "Soperio.Select":
    {
        variants:
        {
            size: "sm" | "md" | "lg" | "xl" | "x2";
            variant: "default" | "solid" | "underline";
            corners: "square" | "default" | "pill";
        };
    },
    "Soperio.Spinner":
    {
        variants: 
        {
            variant?: "default" | "track",
            size?: "sm" | "md" | "lg" | "xl" | "x2";
        };
    },
    "Soperio.TextArea":
    {
        variants:
        {
            size: "sm" | "md" | "lg" | "xl" | "x2";
            variant: "default" | "solid" | "underline";
            corners: "square" | "default" | "pill";
        };
    },
}

export type ComponentTypings<Component extends keyof Components> = 
{
    [key in keyof Components[Component]["variants"]]?: Components[Component]["variants"][key]
}