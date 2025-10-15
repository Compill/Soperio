import '@emotion/react';
import { Theme } from "@emotion/react";
import { ReactNode } from 'react';

declare module '@emotion/react' {
  export interface ThemeProviderProps
  {
    theme: Partial<Theme> | ((outerTheme: Theme) => Theme);
    children: ReactNode;
  }
}
