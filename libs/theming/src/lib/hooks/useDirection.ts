import React from "react";

interface DirectionListener
{
  (direction: boolean): void;
}

const LTR = "ltr";
const RTL = "rtl";

type Direction = "ltr" | "rtl"

// This var will be initialized with the right value by a call
// to useSetDirection() in SoperioInit
// Since I can't find another, and not everything can be initialized
// the react way, we need a "Initiliazer component" (SoperioInit)
// Other libraries are using a Provider component, but since we're not
// using any React.Context, I don't see the point of adding extra
// complexity to the app
let directionInternal = true;
const listeners: DirectionListener[] = [];

// For usage in color props, in this library only
export function getDirection(): boolean
{
  return directionInternal;
}

function setDirectionInternal(direction: Direction)
{
  const nexDirection = direction === LTR;

  if (directionInternal !== nexDirection)
  {
    directionInternal = nexDirection;
    listeners.forEach(item => item(directionInternal));
  }
}

function toggleDirectionInternal()
{
  setDirectionInternal(directionInternal ? RTL : LTR);
}

function addListener(listener: DirectionListener)
{
  listeners.push(listener);
}

function removeListener(listener: DirectionListener)
{
  const index = listeners.indexOf(listener);

  if (index > -1)
    listeners.splice(index, 1);

}

export function useDirection()
{
  const [direction, setDirection] = React.useState(directionInternal);
  const cb = React.useCallback((direction) => setDirection(direction), [setDirection]);

  React.useEffect(() =>
  {
    addListener(cb);

    return () =>
    {
      removeListener(cb);
    };
  }, [cb]);

  return direction;
}

export function useSetDirection()
{
  const cb = React.useCallback((direction: Direction) => setDirectionInternal(direction), []);

  return cb;
}

export function useToggleDirection()
{
  const cb = React.useCallback(() => toggleDirectionInternal(), []);

  return cb;
}
