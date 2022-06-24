import { useDirection, useToggleDarkMode, useToggleDirection, extendTheme, useSetTheme } from "@soperio/react";
import { Button } from "@soperio/ui";
import React from "react";

const defaultTheme = extendTheme({
  components:
  {
    "Soperio.Button": {
      traits: {
        variant: {
          default: {
            // bgColor: "#000000",
            // textColor: "#FF0000",
            // textSize: "24px",
          }
        }
      }
    }
  }
})

const customTheme = extendTheme({
  colorThemes: {
    default: {
      default: "#ffff0099"
    },
  },
  spacing: {
    positive: {
      "5": "100px"
    },
    positiveNegative: {
      "5": "100px"
    }
  },
  components:
  {
    "Soperio.Button": {
      traits: {
        variant: {
          default: {
            bgColor: "#000000",
            textColor: "#FF0000",
            fontSize: "24px",
          }
        }
      }
    }
  }
})

export function Header()
{
  const [displayCustomTheme, setDisplayCustomTheme] = React.useState(true)

  const toggleDirection = useToggleDirection();
  const toggleDarkMode = useToggleDarkMode();
  const setTheme = useSetTheme()

  function toggleTheme()
  {
    setDisplayCustomTheme(!displayCustomTheme)
    setTheme(displayCustomTheme ? customTheme : defaultTheme)
  }

  return (
    <div w="full" h="64px" dflex alignItems="center" placeContent="center">
      <Button variant="default" onClick={toggleDirection}>Toggle direction</Button>
      <Button variant="default" onClick={toggleTheme} ms="3">Toggle theme</Button>
      <Button onClick={() => toggleDarkMode()} ms="3">Toggle Dark Mode</Button>

    </div>
  )
}
