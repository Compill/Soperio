import { useDirection, useToggleDarkMode, extendTheme, useSetTheme } from "@soperio/react";
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

export function Header({ toggleDirection }: { toggleDirection: () => void })
{
  const [displayCustomTheme, setDisplayCustomTheme] = React.useState(true)

  const toggleDarkMode = useToggleDarkMode();
  const setTheme = useSetTheme()
  const direction = useDirection() ? "ltr" : "rtl"

  function toggleTheme()
  {
    setDisplayCustomTheme(!displayCustomTheme)
    setTheme(displayCustomTheme ? {...customTheme, direction  } : {...defaultTheme, direction})
  }

  return (
    <div w="full" h="64px" dflex alignItems="center" placeContent="center" gap="3">
      <Button variant="default" onClick={toggleDirection}>Toggle direction</Button>
      <Button variant="default" onClick={toggleTheme}>Toggle theme</Button>
      <Button onClick={() => toggleDarkMode()}>Toggle Dark Mode</Button>

    </div>
  )
}
