import React, { useContext, useEffect, useState } from "react";
import { format } from "../utils/format";
import { Button } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Pizza = () => {
  const [pizza, setPizza] = useState({});
  const { id } = useParams();
  const { incrementCount } = useContext(CartContext);
  useEffect(() => {
    fetch(`http://localhost:5001/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPizza(data);
      });
  }, []);

  return (
    <div className="m-2 border border-dark rounded d-flex flex-column shadow-lg">
      <div className="d-flex container-fluid justify-content-around p-4 align-items-center">
        <div>
          <img src={pizza.img} alt={pizza.id} width={300} />
        </div>
        <div className="ps-4">
          <h3 className="text-capitalize">{pizza.name || "Loading..."}</h3>
          <p>
            Precio: <strong>${pizza.price ? format(pizza.price) : "0"}</strong>
          </p>
          <p>
            Ingredientes:{" "}
            {pizza.ingredients?.join(", ") || "No ingredients listed."}
          </p>

          <p className="text-wrap">
            {pizza.desc || "No description available."}
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <Button
          variant="dark"
          size="md"
          onClick={() => incrementCount(pizza.id)}
        >
          Añadir al carrito <IoCartOutline />
        </Button>
      </div>
    </div>
  );
};

export default Pizza;
