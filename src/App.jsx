import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Dashboard from './components/dashboard/dashboard';
import Landing from './components/Landing/landing';
import Footer from './components/Footer/footer';

const theme = createTheme({
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
        {/* <Dashboard /> */}
        <Landing />
      </div>
    </ThemeProvider>
  );
};

export default App;
