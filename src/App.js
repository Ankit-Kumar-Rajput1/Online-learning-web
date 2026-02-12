import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CourseDetails from './pages/CourseDetails';
import Html from './components/Html';
import JSReact from './components/JSReact';
import NExpress from './components/NExpress';
import PythonReactNative from './components/PythonReactNative';
import DSA from './components/DSA';
import SqlMysql from './components/SqlMysql';
import C from './components/C';
import Interview from './components/Interview';
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";
import WebDevelopment from "./pages/webdevelopment";
import AppDevelopment from "./pages/appdevelopment";
import PhoneMockupGraphic from "./pages/phonemockup";
import Talk from './pages/Talk';
import Sidebar from "./components/Sidebar";
import './App.css';
import Certificate from "./pages/Certificate";


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className={`app-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <Navbar 
          darkMode={darkMode} 
          toggleDarkMode={() => setDarkMode(!darkMode)} 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Html" element={<Html />} />
            <Route path="/JSReact" element={<JSReact />} />
            <Route path="/nexpress" element={<NExpress />} />
            <Route path="/PythonReactNative" element={<PythonReactNative />} />
            <Route path="/DSA" element={<DSA />} />
            <Route path="/SqlMysql" element={<SqlMysql />} />
            <Route path='/C' element={<C/>}/>
            <Route path='/Interview' element={<Interview/>}/>
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/ServicesSection" element={<ServicesSection />} />
            <Route path="/webdevelopment" element={<WebDevelopment />} />
            <Route path="/appdevelopment" element={<AppDevelopment />} />
            <Route path="/phonemockup" element={<PhoneMockupGraphic />} />
            <Route path="/Talk" element={<Talk />} />
            <Route path="/certificate" element={<Certificate />} />

          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;