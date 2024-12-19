import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <>
      <div>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/registerpage"
              element={<RegisterPage></RegisterPage>}
            ></Route>
            <Route path="/loginpage" element={<LoginPage />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/pizza/p001" element={<Pizza />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </div>
    </>
  );
}

export default App;
