import { ComponentManager, ComponentTheme, HTMLDivProps, useComponentConfig } from "@soperio/react";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Soperio.Scrollable"

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface ScrollableProps extends ComponentProps, HTMLDivProps
{
    theme?: ComponentTheme,
    config?: ExtendConfig;
}

export function Scrollable({
    variant,
    corners,
    theme = "default",
    config,
    children,
    ...props
}: ScrollableProps)
{
    const styles = useComponentConfig(COMPONENT_ID, theme, config, { variant, corners }, props)

    return (
        <div {...styles} {...props}>
            {/*
                In order to reset style for children, we need a wrapper
                In case we have some text or a fragment for example,
                that would not create another tag inside this div
             */}
            <div>
                {children}
            </div>
        </div>
    )
}
