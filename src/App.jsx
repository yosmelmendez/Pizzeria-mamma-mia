import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/*<Home></Home>*/}
      <RegisterPage></RegisterPage>
      <LoginPage></LoginPage>
      <Footer></Footer>
    </>
  );
}

export default App;
