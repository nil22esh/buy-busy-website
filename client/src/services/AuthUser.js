import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import "react-toastify/dist/ReactToastify.css";

const Auth = () => {
  const { loginUser, registerUser, error, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    registerUser({ email, password });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    loginUser({ email, password });
  };

  return (
    <div>
      <ToastContainer />
      <h2>User Authentication</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button onClick={handleSignUp} disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
        <button onClick={handleSignIn} disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Auth;
