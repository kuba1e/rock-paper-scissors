import compose from 'compose-function';
import { withStore } from './with-store';
import { withTheme } from './with-theme';

export const withProviders = compose(withStore, withTheme);
