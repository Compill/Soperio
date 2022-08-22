import { createContext, ParentComponent } from "@soperio/theming";
import React from "react";

const TestPage = React.lazy(() => import("../pages/Test"));

type AppContext = {
  page: string,
  setPage: (page:string) => void,
}

const [ provider, useContext ] = createContext<AppContext>()

function AppContextProvider({ children }: ParentComponent)
{
  const [page, setPage] = React.useState("Button")

  const Provider = provider
  return <Provider value={{page, setPage}}>{children}</Provider>
}

export { AppContextProvider, useContext as useAppContext };
