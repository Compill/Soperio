import { ColorTheme, extendTheme, SoperioProvider, useDirection, useToggleDirection, useToggleDarkMode } from "@soperio/react";
import { Button, ExtendButtonConfig } from "@soperio/ui";
import React from "react";
import { Content } from "./Content";
// import { Content } from "./Content";
// import Page11 from "./Page11"
// jsx("div", {});

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

function App()
{
  const direction = useDirection();
  const toggleDirection = useToggleDirection();
  const toggleDarkMode = useToggleDarkMode();
  const [theme, setTheme] = React.useState(false)

  React.useEffect(() =>
  {
    // init();
  }, []);

  function toggleTheme()
  {
    setTheme(!theme)
  }

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

  const buttonConfig: ExtendButtonConfig = {
    mode: "extends",
    config: (theme: ColorTheme, darkMode: boolean) => ({
      traits: {
        variant: {
          default: {
            bgColor: "#ff0000",
            textColor: "white"
          },
          outline: {
            bgColor: "#ff00ff",
            textColor: "white"
          }
        }
      },
    })
  };

  return (
    <SoperioProvider direction={direction ? "ltr" : "rtl"} theme={theme ? customTheme : defaultTheme}>
      <Button variant="default" onClick={toggleDirection}>Toggle direction</Button>
      <Button variant="default" onClick={toggleTheme} ms="3">Toggle theme</Button>
      <Button onClick={() => toggleDarkMode()} ms="3">Toggle Dark Mode</Button>


      {/* <Page11 /> */}
      <Content />
    </SoperioProvider>
  );
}

export default App;
