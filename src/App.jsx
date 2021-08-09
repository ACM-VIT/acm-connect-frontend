import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Dashboard from './components/Dashboard/dashboard';
import Footer from './components/Footer/footer';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#128C7E',
    },
  },
  breakpoints: {
    values: {
      xs: 315,
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
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
