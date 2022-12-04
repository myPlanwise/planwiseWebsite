// Header will contain the welcome message and get started button

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="contentContainer">
        <h1>Welcome to Planwise</h1>
        <p>🚧 Under Construction 🚧</p> 
        <p>We are working on exciting initiatives to help you plan your future.</p>
        <p>If you have suggestions or would like to get in touch, email us at hello@myplanwise.com.</p>
      </div>
      {/* get started button will render the input form */}
      <div className="getStarted">
        <Link to="/main">
          <button>Get Started</button>
        </Link>
        {/* Link button to login */}
        {/* <Link to="/login">
          <button>Login</button>
        </Link> */}
      </div>
    </header>
  )
}

export default Header;