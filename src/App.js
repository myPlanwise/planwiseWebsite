// create components folder and add Nav, Header, Main, Footer
// import Nav, Header, Main, Footer into App.js

import Nav from './Components/Nav';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <div className="App wrapper">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
