export interface Theme {
  color: {
    primary: string;
    secondary: string;
    primaryText: string;
    secondaryText: string;
    warning: string;
    error: string;
    success: string;
    grey: {
      light: string;
      medium: string;
      dark: string;
    };
  };
  typography: {
    fontSize: number;
    fontFamily: string;
  };
}
