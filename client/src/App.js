import React, { useState, useEffect } from "react";
import Preloader from "../src/components/pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Log In/Login";
// import About from "./components/About/About";
import Shops from "./components/Shops/Shops";
import Blog from "./components/Blog/Blog";
import Securities from "./components/Securities/Securities";
import Socials from "./components/Socials/Socials";
// import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";

// import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/project" element={<Projects />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/shops" element={<Shops />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/securities" element={<Securities />} />
          <Route path="/socials" element={<Socials />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;