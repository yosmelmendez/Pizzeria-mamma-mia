import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPizzaSlice } from "react-icons/fa";
import { format } from "../utils/format";
import { PiEyes } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { Button, CardBody } from "react-bootstrap";

const Cardpizza = ({ pizza }) => {
  // const [listaPizzas, setListaPizzas] = useState({ pizza });

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Header className="fw-medium fs-5">Pizza {pizza.name}</Card.Header>
      <CardBody>
        <p className="fw-light fs-sm">{pizza.desc}</p>
      </CardBody>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <p className=" fw-light">
            <FaPizzaSlice /> Ingredientes:
          </p>
          {pizza.ingredients.map((ingredients, index) => {
            return <li className="fw-light">{ingredients}</li>;
          })}
        </ListGroup.Item>
        <ListGroup.Item>
          <p className="text-center fw-medium fs-4">
            {" "}
            Precio: ${format(pizza.price)}
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
