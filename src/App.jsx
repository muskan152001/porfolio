import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import './App.css'; // Import CSS file

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <header className="bg-blue-500 text-white p-4 shadow-lg sticky top-0 z-50">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Muskan Thakur</h1>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/projects" className="hover:underline">Projects</Link></li>
              <li><Link to="/experience" className="hover:underline">Experience</Link></li>
              <li><Link to="/achievements" className="hover:underline">Achievements</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} Muskan Thakur. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;