import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      fetchProfile();
    }
  }, [token]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error al cargar el perfil.");
      }

      const data = await response.json();
      setUser(data);
      navigate("profile");
    } catch (err) {
      console.error("Error:", err.message);
      logout();
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Error en la autenticación.");
      }

      const data = await response.json();
      alert(data?.error || "Authentication successful!");
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setEmail(data.email);
      setError("");
      setPassword("");
    } catch (err) {
      console.error("Error:", err.message);
      setError("Hubo un problema con la autenticación.");
    }
  };
  const register = async () => {
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    try {
      const response = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error || "Error en el registro.");
      }

      const data = await response.json();
      setSuccess(true);
      alert(data?.error || "Registro exitoso!");
      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem("token", data.token);
      fetchProfile(data.token);
      setPassword("");
      setConfirmPassword("");
      setError("");
    } catch (err) {
      setError(err.message || "Hubo un problema con el registro.");
      setSuccess(false);
    }
  };
  const logout = () => {
    localStorage.removeItem("token"); // Borra el token al cerrar sesión
    setToken(null);
    setUser(null);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        error,
        setError,
        logout,
        useEffect,
        register,
        confirmPassword,
        setConfirmPassword,
        success,
        setSuccess,
        user,
        setUser,
        token,
        fetchProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
