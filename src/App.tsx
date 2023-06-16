//import { useState } from "react";
import Experience from "./components/Pages/Experience/Experience";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import TestPage from "./components/Pages/TestPage";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/Home" element={<Home />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Projects" element={<Projects />}/>
      <Route path="/Experience" element={<Experience />}/>
      <Route path="/" element={<Home />}/>
    </Routes>
  </Router>
  );
}

export default App;
