import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function UserAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const showToast = (message, type) => {
    toast[type](message, {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  const registerUser = async ({ email, password }) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = userCredential.user;
      setUser(newUser);
      showToast("User signed up successfully!", "success");
      navigate("/login");
    } catch (err) {
      setError(err.message);
      showToast(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async ({ email, password }) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(user);
      showToast("User signed in successfully!", "success");
      navigate("/");
    } catch (err) {
      setError(err.message);
      showToast(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setUser(null);
    showToast("User logged out!", "info");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, error, registerUser, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
