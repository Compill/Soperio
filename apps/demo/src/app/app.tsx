import { extendTheme, SoperioProvider } from "@soperio/react";
import React from "react";
import { AppContextProvider } from "./layout/AppContext";
import { Content } from "./layout/Content";
import { Header } from "./layout/Header";
import { Menu } from "./layout/Menu";
// import { Content } from "./Content";
// import Page11 from "./Page11"
// jsx("div", {});



function App()
{


  React.useEffect(() =>
  {
    // init();
  }, []);



  // const customTheme = {
  //   ...defaultTheme, globalStyles: {
  //     body: {
  //       fontFamily: "Inter, sans-serif",
  //       fontFeatureSettings: "'kern'",
  //       webkitFontSmoothing: "antialiased",
  //       textRendering: "optimizelegibility"
  //     }
  //   }
  // };

  const [direction, setDirection] = React.useState(true)

  const toggleDirection = React.useCallback(() => setDirection(!direction), [direction, setDirection])

  const theme = extendTheme({
    direction: direction ? "ltr" : "rtl"
  })

  return (
    <AppContextProvider>
      <SoperioProvider theme={theme}>
        <AppContent toggleDirection={toggleDirection} />
      </SoperioProvider>
    </AppContextProvider>
  );
}

function AppContent({ toggleDirection }: { toggleDirection: () => void })
{
  console.log("app content")
  return (
    <div dflex flexRow alignItems="start" transition="all">
      <Menu />
      <div flexGrow h="screen" ms="240px" transition="all">
        <Header toggleDirection={toggleDirection} />
        <Content />
      </div>
    </div>
  )
}

export default App;
