// this is the nav bar component with will route to home, about and tools. This will also contain the logo and the login button

// import navlink from react router dom
// import logo from assets
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { useRef } from "react";

const Nav = ({ toggleTheme, theme }) => {
  // const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  const handleOpen = () => {
    menuRef.current.style.right = "0";
        document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    menuRef.current.style.right = "-200vw";
        document.body.style.overflow = "unset";
  };


  return (
    <nav>
      <div className="navigation">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          </div>
          <ul className="menuContainer">
            <li className="menuIcon" onClick={handleOpen}>
              <i className="fa-sharp fa-solid fa-bars"></i>
            </li>
            <li className="toggleTheme">
              {/* if darktheme toggle on, else toggle off */}
              {theme === "dark-theme" 
              ? <i className="fa-solid fa-sun" onClick={toggleTheme}></i>
              : <i className="fa-solid fa-moon" onClick={toggleTheme}></i>}
            </li>
          </ul>
      </div>
        <div className="slideOutNav" ref={menuRef} style={{right:"-200vw"}}>
            <ul className="navLinks">
              <li className="xIcon" onClick={handleClose}>
                <i className="fa-solid fa-xmark"></i>
              </li>
              <li className="home" onClick={handleClose}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="about" onClick={handleClose}>
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="tools" onClick={handleClose}>
                <NavLink to="/main">Tools</NavLink>
              </li>
              {/* <li className="login">
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className="contact">
                <NavLink to="/contact">Contact</NavLink>
              </li> */}
            </ul>
        </div>
    </nav>
  )
};

export default Nav;