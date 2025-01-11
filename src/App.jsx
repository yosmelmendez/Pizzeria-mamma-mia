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
import UserProvider from "./context/UserContext";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import PublicRoutes from "./pages/PublicRoutes";

function App() {
  return (
    <>
      <div>
        <UserProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/registerpage"
                element={
                  <PublicRoutes>
                    <RegisterPage />
                  </PublicRoutes>
                }
              ></Route>
              <Route
                path="/loginpage"
                element={
                  <PublicRoutes>
                    <LoginPage />
                  </PublicRoutes>
                }
              ></Route>
              <Route path="/cart" element={<Cart />}></Route>

              <Route
                path="/profile"
                element={
                  <ProtectedRoutes>
                    <Profile />
                  </ProtectedRoutes>
                }
              ></Route>

              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </CartProvider>
        </UserProvider>
      </div>
    </>
  );
}

export default App;
