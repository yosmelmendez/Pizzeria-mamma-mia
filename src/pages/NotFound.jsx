import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="fs-4 text-muted">
        ¡Ups! Parece que esta pizza se quemó en el horno... 🍕🔥
      </p>
      <p className="fs-5 text-muted">
        No podemos encontrar la página que buscas, pero siempre puedes volver al
        menú.
      </p>
      <Link to="/" className="btn btn-warning mt-3">
        Volver al menú principal 🍕
      </Link>
      <img
        src="https://via.placeholder.com/400x300.png?text=Pizza+Not+Found" // Cambia por la URL de una imagen temática
        alt="Pizza perdida"
        className="mt-4 img-fluid rounded"
      />
    </div>
  );
};

export default NotFound;
