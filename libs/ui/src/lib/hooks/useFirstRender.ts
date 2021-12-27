import React from "react";

export function useFirstRender()
{
    const firstRender = React.useRef(true);

    React.useEffect(() => {
        firstRender.current = false;
    }, []);

    return firstRender.current;
}