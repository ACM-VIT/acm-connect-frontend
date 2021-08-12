import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import Footer from './components/Footer/footer';
import Dialog from './components/Dialog/dialog';

const App = () => {
  return (
    <div className="App">
      <Dashboard />
      <Dialog />
      <Footer />
    </div>
  );
};

export default App;
