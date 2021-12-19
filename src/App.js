import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route element={<Projects />} path="/projects" />
          <Route element={<Skills />} path="/skills" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Home />} path="/" />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
