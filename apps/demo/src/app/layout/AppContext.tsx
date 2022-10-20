import { createContext, extendTheme, ParentComponent, Theme } from "@soperio/theming";
import React from "react";

type AppContext = {
  page: string,
  setPage: (page:string) => void,
  theme: Theme,
  setTheme: (theme) => void
}

const [ provider, useContext ] = createContext<AppContext>()

const sTheme = extendTheme({
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

function AppContextProvider({ children }: ParentComponent)
{
  const [page, setPage] = React.useState("Test")
  const [theme, setTheme] = React.useState(sTheme)
  
  const Provider = provider

  const value = {
    page,
    setPage,
    theme,
    setTheme,

  }

  return <Provider value={value}>{children}</Provider>
}

export { AppContextProvider, useContext as useAppContext };
