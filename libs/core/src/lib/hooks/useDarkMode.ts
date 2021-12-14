import React from "react";

interface DarkModeListener
{
  (darkMode: boolean): void;
}

// This var will be initialized with the right value by a call
// to useSetDarkMode() in SoperioInit
// Since I can't find another, and not everything can ve initialized
// the react way, we need a "Initiliazer component" (SoperioInit)
// Other libraries are using a Provider component, but since we're not
// using any React.Context, I don't see the point of adding extra
// complexity to the app
let darkModeInternal = false; // // TODO Get value from theme?
const listeners: DarkModeListener[] = [];

function setDarkModeInternal(darkMode: boolean)
{
  darkModeInternal = darkMode;

  listeners.forEach(item => item(darkModeInternal));
}

function toggleDarkModeInternal()
{
  setDarkModeInternal(!darkModeInternal)
}

function addListener(listener: DarkModeListener)
{
  listeners.push(listener);
}

function removeListener(listener: DarkModeListener)
{
  const index = listeners.indexOf(listener);

  if (index > -1)
    listeners.splice(index, 1)

}


export function useDarkMode()
{
  const [darkMode, setDarkMode] = React.useState(darkModeInternal);
  const cb = React.useCallback((darkMode) => setDarkMode(darkMode), [setDarkMode]);

  React.useEffect(() =>
  {
    addListener(cb);

    return () => {
      removeListener(cb);
    }
})

return darkMode;
}

export function useSetDarkMode()
{
  const cb = React.useCallback((darkMode) => setDarkModeInternal(darkMode), []);

  return cb;
}

export function useToggleDarkMode()
{
  const cb = React.useCallback(() => toggleDarkModeInternal(), []);

  return cb;
}
