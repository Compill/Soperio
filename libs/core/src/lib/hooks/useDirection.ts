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
let directionInternal = true; // TODO Get value from theme?
const listeners: DirectionListener[] = [];

// For usage in color props, in this library only
export function getDirection(): boolean
{
  return directionInternal;
}

function setDirectionInternal(direction: Direction)
{
  console.log("set direction", direction)
  const nexDirection = direction === LTR;

  if (directionInternal !== nexDirection)
  {
    console.log("set direction because different", direction)
    directionInternal = nexDirection;
    listeners.forEach(item => item(directionInternal));
  }
}

function toggleDirectionInternal()
{
  console.log("toggle direction internal")
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
  const cb = React.useCallback((direction) => {console.log("use direction callback ", direction); setDirection(direction)}, [setDirection]);

  console.log("use direction", direction)

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
  console.log("use set direction")
  const cb = React.useCallback((direction: Direction) => setDirectionInternal(direction), []);

  return cb;
}

export function useToggleDirection()
{
  console.log("use toggle direction")
  const cb = React.useCallback(() => toggleDirectionInternal(), []);

  return cb;
}
