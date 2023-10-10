import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Bann from "./Components/Bann";
import Last from "./Components/Last";
import Login from "./Components/Login";
import Singin from "./Components/Singin";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const history = useHistory();

  // // Function to handle successful login
  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  //   // Redirect to the desired page after login (e.g., dashboard)
  //   history.push("/dashboard");
  // };

  return (
    <div>
      <Navbar />
      <Bann />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        {/* <Route
          path="/login"
          element={<Login isLoggedIn={isLoggedIn} handleLogin={handleLogin} />}
        /> */}
        <Route path="/signin" element={<Singin />} />
      </Routes>
      <Last />
      <Footer />
    </div>
  );
}

export default App;
