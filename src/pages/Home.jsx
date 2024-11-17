import React from "react";
import Header from "./components/header";
import Cardpizza from "../components/Cardpizza";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Row className="p-4 pt-5 pb-5 ">
        <Col>
          <Cardpizza
            name="Napolitana"
            ingredients={["mozarella", "tomates", "jamon", "oregano"]}
            price={5950}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          ></Cardpizza>
        </Col>
        <Col>
          <Cardpizza
            name="Española"
            price={6950}
            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
          ></Cardpizza>
        </Col>
        <Col>
          <Cardpizza
            name="Pepperoni"
            price={6950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
          ></Cardpizza>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
