// this component will contain the routes for the app

// import react router dom
// import routes component
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import About from "./About";

const RoutesComp = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/main" element={<Main />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/tools" element={<Tools />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default RoutesComp;