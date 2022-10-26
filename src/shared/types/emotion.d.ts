import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      background: {
        main: string;
        success: string;
        disabled: string;
    };
      ui: {
        text: string;
        border: string;
        primary: string;
        secondary:string
      };
    };
  }
  export interface ThemeArg {
    theme: Theme;
  }
}
