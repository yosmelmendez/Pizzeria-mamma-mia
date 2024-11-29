import React, { useState } from "react";
import { pizzaCart } from "../data/pizzas";
import { Button, Col, Container, Row } from "react-bootstrap";
import { format } from "../utils/format";

const Cart = () => {
  const [pizzaCount, setPizzaCount] = useState(pizzaCart);
  const [totalCart, setTotalCart] = useState(19190);

  function decrementCount(index) {
    pizzaCount[index].count--;
    const updatedCart = pizzaCount.filter((pizza) => pizza.count > 0);
    setPizzaCount([...updatedCart]);
    calculateTotal(pizzaCount);
  }
  function incrementCount(index) {
    pizzaCount[index].count++;
    setPizzaCount([...pizzaCount]);
    calculateTotal(pizzaCount);
  }
  function calculateTotal(updatedCart) {
    const total = updatedCart.reduce(
      (sum, pizza) => sum + pizza.price * pizza.count,
      0
    );
    setTotalCart(total);
  }
  return (
    <div className="pt-5 pb-5">
      <h2 className="text-center">Detalles del pedido:</h2>
      <Container>
        <Row className="pt-2">
          {pizzaCount.map((item, index) => {
            return (
              <Col
                sm="12"
                className="d-flex p-3 align-items-center justify-content-around"
              >
                <div className="d-flex align-items-center">
                  <img src={item.img} alt="" width={80} />
                  <p className="ps-3">{item.name}</p>
                </div>
                <div></div>
                <div className="d-flex align-items-center">
                  <p className="pe-3">${format(item.price)}</p>
                  <Button
                    variant="outline-danger"
                    onClick={() => decrementCount(index)}
                  >
                    -
                  </Button>
                  <span className="px-2">{item.count}</span>
                  <Button
                    variant="outline-primary"
                    onClick={() => incrementCount(index)}
                  >
                    +
                  </Button>
                </div>
              </Col>
            );
          })}
        </Row>
        <span>
          {" "}
          <strong> Total: ${format(totalCart)}</strong>
        </span>

        <br />
        <br />
        <Button variant="dark">Pagar</Button>
      </Container>
    </div>
  );
};

export default Cart;
