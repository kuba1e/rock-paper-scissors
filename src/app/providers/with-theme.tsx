import { ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';
import { theme } from 'shared/lib/theme';

export const withTheme = (component: () => ReactNode) => () =>
  <ThemeProvider theme={theme}>{component()}</ThemeProvider>;
