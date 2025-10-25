import React from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
export function jsx(
    type/*: React.ElementType*/,
    props/*: P*/
)/*: typeof React.createElement*/
{
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    return React.createElement.apply(undefined, args);
}
