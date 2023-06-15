//import { useState } from "react";
import Home from "./components/Home";
import TestPage from "./components/TestPage";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/Home" element={<Home />}/>
      <Route path="/About" element={<TestPage />}/>
      <Route path="/Projects" element={<TestPage />}/>
      <Route path="/Experience" element={<TestPage />}/>
      <Route path="/" element={<Home />}/>
    </Routes>
  </Router>
  );
}

export default App;
