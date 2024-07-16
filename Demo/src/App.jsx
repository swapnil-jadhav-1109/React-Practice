import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
