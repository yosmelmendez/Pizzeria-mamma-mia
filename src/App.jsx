import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
