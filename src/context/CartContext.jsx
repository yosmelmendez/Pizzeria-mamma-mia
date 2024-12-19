import { createContext, useState } from "react";
import { pizzaCart } from "../data/pizzas";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [pizzaCount, setPizzaCount] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [pizzas, setPizzas] = useState([]);

  return (
    <CartContext.Provider
      value={{
        pizzaCount,
        setPizzaCount,
        totalCart,
        setTotalCart,
        pizzas,
        setPizzas,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
