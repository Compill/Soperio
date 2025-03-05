import { extendTheme, SoperioProvider } from "@soperio/react";
import React from "react";
import { AppContextProvider, useAppContext } from "./layout/AppContext";
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



  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
}

function AppContent()
{
  const { theme } = useAppContext()

  return (
    <div>
      <AppContextProvider>
        <SoperioProvider theme={theme}>
          <Content />
          {/* <div dflex flexRow alignItems="start" transition="all" bgColor="--bg">
        <Menu />
        <div flexGrow h="screen" ms="240px" transition="all">
          <Header />
          <Content />
        </div>
      </div> */}
        </SoperioProvider>
      </AppContextProvider>
    </div>
  )
}

export default App;
