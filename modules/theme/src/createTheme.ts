import { Theme } from './Theme';

import * as deepmerge from 'deepmerge';
import { defaultTheme } from './defaultTheme';

export function createTheme(theme?: Theme) {
  return deepmerge(defaultTheme, theme || {});
}
