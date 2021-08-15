import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Dashboard from './components/dashboard/dashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#25D366',
      contrastText: '#fff',
    },
    secondary: {
      light: '#2D3134',
      main: '#2D3134',
      dark: '#2D3134',
      contrastText: '#fff',
    },
  },
  breakpoints: {
    values: {
      xs: 1400,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1247,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
};

export default App;
