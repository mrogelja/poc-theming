import { Theme } from './Theme';
import * as deepmerge from 'deepmerge';
import { defaultTheme } from './defaultTheme';

export function createTheme(theme?: Theme) {
  return deepmerge(defaultTheme, theme || {});
}


export function injectTheme(theme: Theme) {
  let sheet = document.createElement('style');
  sheet.setAttribute("css-theme", "css-theme");

  sheet.innerHTML = `
    :root{
      --background-color-0: ${theme.background.color[0]};
      --background-color-1: ${theme.background.color[1]};
      --background-color-2: ${theme.background.color[2]};

      --color-primary: ${theme.color.primary};
      --color-secondary: ${theme.color.secondary};
      --text-color-primary: ${theme.color.primaryText};      
      --text-color-secondary: ${theme.color.secondaryText};
    }
  `;
  document.head.appendChild(sheet);
}