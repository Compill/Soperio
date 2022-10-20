import { useDirection, useDarkMode, useToggleDarkMode, extendTheme, HTMLDivProps } from "@soperio/react";
import React from "react";
import { useAppContext } from "./AppContext";

const defaultTheme = extendTheme({
  colors:
  {
    "sky-500": "#0ea5e9",
    "pink-500": "#ec4899",
    "yellow-500": "#eab308",
    "red-500": "#ef4444",
  },
  rootColors:
  {
    "bg": "#efefef"
  },
  darkModeOverride:
  {
    rootColors:
    {
      bg: "#111111"
    }
  }
})

const customTheme = extendTheme({
  spacing: {
    positive: {
      "5": "100px"
    },
    positiveNegative: {
      "5": "100px"
    }
  },
})

export function Header()
{
  const [direction, setDirection] = React.useState(true)
  const [displayCustomTheme, setDisplayCustomTheme] = React.useState(false)

  const { setTheme } = useAppContext()
  const toggleDarkMode = useToggleDarkMode();
  const darkMode = useDarkMode()

  console.log("dark mode", darkMode)

  const toggleDirection = React.useCallback(() => {
    setDirection(!direction)
  }, [direction, setDirection])

  const toggleTheme = React.useCallback(() => {
    setDisplayCustomTheme(!displayCustomTheme)
  }, [displayCustomTheme, setDisplayCustomTheme])

  React.useEffect(() => {
    setTheme(displayCustomTheme ? { ...customTheme, direction: direction ? "ltr" : "rtl" } : { ...defaultTheme, direction: direction ? "ltr" : "rtl" })
  },  [direction, displayCustomTheme])

  return (
    <div w="full" h="64px" dflex alignItems="center" placeContent="center" gap="3">
      <Button onClick={toggleDirection}>Toggle direction</Button>
      <Button onClick={toggleTheme}>Toggle theme</Button>
      <Button onClick={toggleDarkMode}>Toggle Dark Mode</Button>

    </div>
  )
}

function Button({ children, ...props }: HTMLDivProps)
{
  return <div p="2" rounded bgColor="#0099ff" textColor="white" cursor="pointer" {...props}>{children}</div>
}
