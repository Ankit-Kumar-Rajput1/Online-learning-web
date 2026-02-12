import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Navbar.css';

function Navbar({ darkMode, toggleDarkMode, toggleSidebar }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    alert("👋 Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Left Section */}
        <div className="nav-left">
          <button className="hamburger-btn" onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <Link to="/" className="nav-logo">
            <span className="logo-icon">📈</span>
            <span className="logo-text">CodeCraft</span>
          </Link>
        </div>

        {/* Center Section */}
        <div className="nav-center">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/courses" className="nav-link">Courses</Link>
          <Link to="/ServicesSection" className="nav-link">Services</Link>
          <Link to="/certificate" className="nav-link">Certificate</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        {/* Right Section */}
        <div className="nav-right">

          <button className="theme-btn" onClick={toggleDarkMode}>
            {darkMode ? '🌞' : '🌙'}
          </button>

          <div className="nav-auth">
            {user ? (
              <>
                <span className="welcome-user">
                  Hi, {user.displayName || "User"}
                </span>
                <button 
                  onClick={handleLogout} 
                  className="auth-btn logout-btn"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="auth-btn login-btn">
                  Login
                </Link>
                <Link to="/signup" className="auth-btn signup-btn">
                  Sign Up
                </Link>
              </>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
