import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email.trim() || !password.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setSuccess(true);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container mt-4 mb-4">
      <form className="formulario" onSubmit={handleLogin}>
        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">Inicio de sesión exitoso.</p>}

        <div className="form-group mt-3">
          <label>E-Mail</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group mt-3">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button type="submit" className="mt-3 btn btn-primary">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
