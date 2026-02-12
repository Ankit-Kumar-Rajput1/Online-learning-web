import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, db } from "../firebase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match ❌");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: formData.name });

      await set(ref(db, "users/" + user.uid), {
        name: formData.name,
        email: formData.email,
        createdAt: new Date().toISOString(),
        role: "student",
        coursesEnrolled: []
      });

      toast.success("🎉 Signup Successful! Welcome to CodeCraft!");

      setTimeout(() => navigate("/"), 2000);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <ToastContainer position="top-center" autoClose={2000} />

      <div className="auth-container">
        <div className="auth-header">
          <h2 className="auth-title">Join CodeCraft</h2>
          <p className="auth-subtitle">Start your coding journey today</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <div className="input-group">
              <span className="input-icon">👤</span>
              <input name="name" id="name" placeholder="John Doe" onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-group">
              <span className="input-icon">📧</span>
              <input type="email" name="email" id="email" placeholder="you@example.com" onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <span className="input-icon">🔒</span>
              <input type="password" name="password" id="password" placeholder="••••••••" onChange={handleChange} required minLength="6" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-group">
              <span className="input-icon">✅</span>
              <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" onChange={handleChange} required />
            </div>
          </div>

          <label className="checkbox terms">
            <input type="checkbox" required />
            <span>
              I agree to the <Link to="/terms">Terms</Link> and <Link to="/privacy">Privacy Policy</Link>
            </span>
          </label>

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account? <Link to="/login">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
