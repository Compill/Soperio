import React from "react";
import { Soperio } from "./Soperio";

const typePropName = '__SOPERIO_TYPE_PLEASE_DO_NOT_USE__';

function createSoperioProps(type/*: React.ElementType*/, props/*: any*/)
{
    return { ...props, [ typePropName ]: type };
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function jsx(
    type/*: React.ElementType*/,
    props/*: P*/
)/*: typeof React.createElement*/
{
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;

    if (props == null/* || !Object.hasOwnProperty.call(props, 'css')*/)
    {
        // $FlowFixMe
        return React.createElement.apply(undefined, args);
    }

    const argsLength = args.length;
    const createElementArgArray = new Array(argsLength);
    createElementArgArray[ 0 ] = Soperio;
    createElementArgArray[ 1 ] = createSoperioProps(type, props);

    for (let i = 2; i < argsLength; i++)
    {
        createElementArgArray[ i ] = args[ i ];
    }

    // $FlowFixMe
    return React.createElement.apply(null, createElementArgArray);
}