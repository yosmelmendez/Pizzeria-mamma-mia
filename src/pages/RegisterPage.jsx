import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const RegisterPage = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    register,
    success,
    confirmPassword,
    setConfirmPassword,
  } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password);
  };

  return (
    <>
      <div className="container mt-4">
        <h3>Crea tu perfil</h3>
        <form className="formulario mt-4" onSubmit={handleSubmit}>
          {error && <p className="text-danger">{error}</p>}
          {success && <p className="text-success">Registro exitoso.</p>}
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
          <div className="form-group mt-3">
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
          <button type="submit" className="mt-3 btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
