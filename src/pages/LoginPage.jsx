import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const { email, setEmail } = useContext(UserContext);
  const { password, setPassword, handleLogin } = useContext(UserContext);
  const { error } = useContext(UserContext);

  return (
    <div className="container mt-4 mb-4">
      <h3>Inicia sesión</h3>
      <form className="formulario" onSubmit={handleLogin}>
        {error && <p className="text-danger">{error}</p>}

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
