// create components folder and add Nav, Header, Main, Footer
// import Nav, Header, Main, Footer into App.js

// import { Routes, Route } from "react-router-dom";

import RoutesComp from './Components/RoutesComp';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <div className="App wrapper">
      <Nav />
      <RoutesComp />
      <Footer />
    </div>
  );
}

export default App;
