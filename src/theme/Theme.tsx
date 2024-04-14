import * as React from 'react';

import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette :{
    primary: {
      main: '#fff'
    },
    secondary:{
      main: '#ee1155'
    }
  }
});

type ThemeProps = {
    children: React.ReactNode;

}

export default function Theme({children}: ThemeProps){
    return(
        <ThemeProvider theme = {theme}>
            {children}
        </ThemeProvider>
    );
}