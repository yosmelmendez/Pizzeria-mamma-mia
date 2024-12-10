import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateData = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

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

    setSuccess(true);
    setError(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <div className="container mt-4">
        <h3>Crea tu perfil</h3>
        <form className="formulario mt-4" onSubmit={validateData}>
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
