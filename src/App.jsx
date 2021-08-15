import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Dashboard from './components/dashboard/dashboard';
import Landing from './components/Landing/landing';
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
        <Route path="/" exact component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </ThemeProvider>
  );
};

export default App;
