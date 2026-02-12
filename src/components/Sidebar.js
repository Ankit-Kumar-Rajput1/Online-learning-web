import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Sidebar.css";

function Sidebar({ open, setOpen }) {
  const sidebarVariants = {
    closed: { x: "-100%", transition: { type: "spring", stiffness: 400, damping: 40 } },
    open: { x: 0, transition: { type: "spring", stiffness: 400, damping: 40 } },
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1, duration: 0.3 } }),
  };

  const menuItems = [
    { path: "/", label: "🏠 Home" },
    { path: "/courses", label: "📚 Courses" },
    { path: "/about", label: "🎯 About Us" },
    { path: "/ServicesSection", label: "⚡ Services" },
    { path: "/contact", label: "📞 Contact" },
    { path: "/login", label: "🔐 Login" },
    { path: "/signup", label: "✨ Sign Up" },
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: "📘" },
    { href: "https://twitter.com", icon: "🐦" },
    { href: "https://instagram.com", icon: "📸" },
    { href: "https://linkedin.com", icon: "💼" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            className="sidebar"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
          >
            <div className="sidebar-header">
              <h2 className="sidebar-title">CodeCraft Academy</h2>
              <button className="sidebar-close" onClick={() => setOpen(false)}>✕</button>
            </div>

            <div className="sidebar-user">
              <div className="user-avatar">👨‍💻</div>
              <div className="user-info">
                <h3>Welcome!</h3>
                <p>Start Learning Today</p>
              </div>
            </div>

            <nav className="sidebar-nav">
              {menuItems.map((item, index) => (
                <motion.div key={item.path} custom={index} variants={linkVariants}>
                  <Link to={item.path} className="sidebar-link" onClick={() => setOpen(false)}>
                    <span className="link-icon">→</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="sidebar-footer">
              <div className="social-links">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="sidebar-copyright">© 2024 CodeCraft Academy</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
