import { Button } from "react-bootstrap";
import React from "react";

const Profile = () => {
  return (
    <div className="profile-container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="display-4 fw-bold text-primary">
        ¡Bienvenido a tu perfil! 🍕
      </h1>
      <p className="fs-5 text-muted">
        Revisa tus datos y sigue disfrutando de nuestras deliciosas pizzas.
      </p>

      <div className="profile-card p-4 mt-4 rounded shadow-sm">
        <h3 className="text-dark">Correo electrónico</h3>
        <p className="fs-5 text-secondary">prueba@gmail.com</p>
        <Button className="btn btn-danger mt-3">Cerrar sesión</Button>
      </div>
    </div>
  );
};

export default Profile;
