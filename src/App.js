// create components folder and add Nav, Header, Main, Footer
// import Nav, Header, Main, Footer into App.js

// import { Routes, Route } from "react-router-dom";
// TODO: Add light/dark mode

import { useEffect, useState } from 'react';
import RoutesComp from './Components/RoutesComp';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

import './App.css';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {

  const [theme, setTheme] = useState(getStorageTheme());
  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="App wrapper">
      <Nav toggleTheme={toggleTheme} theme={theme}/>
      <RoutesComp />
      <Footer />
    </div>
  );
}

export default App;
