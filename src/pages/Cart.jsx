import React, { useContext, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { format } from "../utils/format";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { pizzaCount, setPizzas, setPizzaCount, totalCart, setTotalCart } =
    useContext(CartContext);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { token } = useContext(UserContext);

  function decrementCount(index) {
    if (pizzaCount[index].count > 1) {
      const updatedCart = [...pizzaCount];
      updatedCart[index].count--;
      setPizzaCount(updatedCart);
      calculateTotal(updatedCart);
    } else {
      const updatedCart = pizzaCount.filter((_, i) => i !== index);
      setPizzaCount(updatedCart);
      calculateTotal(updatedCart);
    }
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

  const handleCheckout = async () => {
    if (!token) {
      setSuccessMessage("");
      setErrorMessage("Debe iniciar sesión para realizar una compra.");
      return;
    }
    if (pizzaCount == 0) {
      setSuccessMessage("");
      setErrorMessage("El carrito esta vacio.");
      return;
    }
    try {
      const response = await fetch("http://localhost:5001/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cart: pizzaCount,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al cargar el perfil.");
      }

      const data = await response.json();
      setSuccessMessage("¡Compra realizada con éxito!");
      setErrorMessage("");
      setPizzas([]);
      setPizzaCount([]);
      setTotalCart(0);
    } catch (err) {
      console.error("Error:", err.message);
      setErrorMessage("Hubo un problema al procesar la compra.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="pt-5 pb-5">
      <h2 className="text-center">Detalles del pedido:</h2>
      {successMessage && (
        <p className="text-success text-center">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-danger text-center">{errorMessage}</p>
      )}
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
        <div className="d-flex justify-content-center">
          <Button
            disabled={!token}
            variant="dark"
            onClick={handleCheckout}
            className={
              token ? "bg-primary" : "text-secondary cursor-not-allowed"
            }
          >
            Pagar
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
