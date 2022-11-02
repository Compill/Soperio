import React from "react";
import { NormalizeCSS } from "../NormalizeCSS";
import { css, Global, ThemeProvider } from "@emotion/react";
import { defaultTheme } from "../defaultTheme";
// import { useSetDarkModeConfig } from "./hooks/useDarkMode";
import { Theme } from "../Theme";
import { ThemeCache } from "../ThemeCache";
import { ParentComponent } from "../SoperioComponent";
import { DarkModeProvider } from "./DarkModeProvider";
import { LanguageDirectionProvider, useDirection } from "./LanguageDirectionProvider";


export interface SoperioProviderProps extends ParentComponent
{
  resetCss?: boolean,
  theme?: Theme,
  darkMode?: "light" | "dark" | "system";
  direction?: "rtl" | "ltr";
};

// SoperioProvider is out initializer
// Devs must add it to their code and put the components as children
export function SoperioProvider({
  resetCss = true,
  theme = defaultTheme,
  direction,
  darkMode,
  children,
  ...props
}: SoperioProviderProps)
{
  // If the theme changes, clear the theme cache
  React.useEffect(() =>
  {
      ThemeCache.get().clear()
  }, [theme]);

  return (
    // TODO --so should be dynamic
    <ThemeProvider theme={theme} >
      {resetCss ? <NormalizeCSS /> : null}

      {/* TODO Implement GlobalStyle https://github.com/chakra-ui/chakra-ui/blob/f77fd9999ec1105cf846cd830019d2c3ba5a0f4e/packages/system/src/providers.tsx */}
      {theme.globalStyles && <Global styles={css(theme.globalStyles)} />}

      <DarkModeProvider darkModeConfig={theme.darkMode}>
        <LanguageDirectionProvider direction={direction || theme.direction || "ltr"}>
          <ContentContainer {...props}>
            {children}
          </ContentContainer>
        </LanguageDirectionProvider>
      </DarkModeProvider>
    </ThemeProvider>
  );
}

function ContentContainer({ children, ...props }: ParentComponent)
{
  const direction = useDirection()
  
  return (
    <div dir={direction ? "ltr" : "rtl"} {...props}>
      {children}
    </div>
  )
}
