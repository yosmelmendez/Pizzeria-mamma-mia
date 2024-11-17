import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPizzaSlice } from "react-icons/fa";
import { format } from "../utils/format";
import { PiEyes } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "react-bootstrap";

const Cardpizza = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Header className="fw-medium fs-5">Pizza {props.name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <p className="text-center fw-light">Ingredientes:</p>
          <p className="text-center fw-light">
            <FaPizzaSlice />{" "}
            {props.ingredients
              .map((ingredients, index) => ingredients)
              .join(", ")}
          </p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className="text-center fw-medium fs-4">
            {" "}
            Precio: ${format(props.price)}
          </p>
          <div className="d-flex justify-content-between">
            <Button variant="outline-dark" className="bg-light text-dark">
              Ver Más <PiEyes />
            </Button>
            <Button variant="outline-light" className="bg-dark text-light">
              Anadir <IoCartOutline />
            </Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Cardpizza;
