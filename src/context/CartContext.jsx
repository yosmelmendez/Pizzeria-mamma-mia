import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [pizzaCount, setPizzaCount] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [pizzas, setPizzas] = useState([]);

  const incrementCount = (id) => {
    const existingPizza = pizzaCount.find((item) => item.id === id);

    if (existingPizza) {
      const updatedCart = pizzaCount.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );
      setPizzaCount(updatedCart);
      calculateTotal(updatedCart);
    } else {
      const pizzaToAdd = pizzas.find((pizza) => pizza.id === id);
      const newCart = [...pizzaCount, { ...pizzaToAdd, count: 1 }];
      setPizzaCount(newCart);
      calculateTotal(newCart);
    }
  };
  function calculateTotal(updatedCart) {
    const total = updatedCart.reduce(
      (sum, pizza) => sum + pizza.price * pizza.count,
      0
    );
    setTotalCart(total);
  }

  return (
    <CartContext.Provider
      value={{
        pizzaCount,
        setPizzaCount,
        totalCart,
        setTotalCart,
        pizzas,
        setPizzas,
        incrementCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
