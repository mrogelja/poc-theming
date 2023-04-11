import { Theme } from './Theme';

export const defaultTheme: Theme = {
  background: {
    color: {
      0: "red",
      1: "white",
      2: "white"
    }
  },
  color: {
    primary: '#42a5f5',
    secondary: '#ba68c8',
    primaryText: 'black',
    secondaryText: 'white',
    warning: 'orange',
    error: 'red',
    success: 'green',
    grey: {
      light: '#fafafa',
      dark: '#757575',
      medium: '#212121',
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: 'Arial',
  },
};

