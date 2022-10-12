import { useDirection, useToggleDarkMode, extendTheme, useSetTheme, HTMLDivProps } from "@soperio/react";
import React from "react";

const defaultTheme = extendTheme({
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
      <Button onClick={toggleDirection}>Toggle direction</Button>
      {/* <Button variant="default" onClick={toggleTheme}>Toggle theme</Button> */}
      <Button onClick={() => {console.log("click"), toggleDarkMode()}}>Toggle Dark Mode</Button>

    </div>
  )
}

function Button({ children, ...props }: HTMLDivProps)
{
  return <div p="2" rounded bgColor="#0099ff" textColor="white" cursor="pointer" {...props}>{children}</div>
}
