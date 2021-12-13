import useDarkModeInternal from "./useDarkModeInternal";

export function useToggleDarkMode()
{
  const { toggleDarkMode } = useDarkModeInternal();

  return toggleDarkMode;
}
