// this is the nav bar component with will route to home, about and tools. This will also contain the logo and the login button

// import navlink from react router dom
// import logo from assets
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Nav = () => {
  return (
    <nav>
      <div className="desktopNav">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          </div>
          <ul className="navLinks">
            <li className="home">
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li className="about">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="tools">
              <NavLink to="/tools"></NavLink>
            </li>
            <li className="login">
              <NavLink to="/login"></NavLink>
            </li> */}
            {/* <li className="contact">
              <NavLink to="/contact">Contact</NavLink>
            </li> */}
          </ul>
      </div>
    </nav>
  )
};

export default Nav;