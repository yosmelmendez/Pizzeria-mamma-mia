import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
// import RegisterPage from "./pages/RegisterPage";
// import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        {/*<Home></Home>*/}
        {/*<RegisterPage></RegisterPage> */}
        {/* <LoginPage></LoginPage>*/}
        <Cart />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
