// create components folder and add Nav, Header, Main, Footer
// import Nav, Header, Main, Footer into App.js

// import { Routes, Route } from "react-router-dom";
// TODO: Add light/dark mode

import RoutesComp from './Components/RoutesComp';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

import './App.css';

//localstorage uid for backend
// user will visit site, the browser will check if there is a uid in localstorage and if there is, it will send it to the backend to check if it is a valid uid then the backend will send back the user data and the frontend will store it in state and display it on the page
// budget income and expenses will be stored in state and sent to the backend to be stored in the database

function App() {
  return (
    <body className="App wrapper">
      <Nav />
      <RoutesComp />
      <Footer />
    </body>
  );
}

export default App;
