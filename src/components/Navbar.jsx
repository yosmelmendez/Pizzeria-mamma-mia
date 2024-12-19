import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { format } from "../utils/format";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaPizzaSlice } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { totalCart } = useContext(CartContext);
  const token = true;
  return (
    <div className="d-flex justify-content-between bg-dark text-light align-items-center ">
      <div>
        {token ? (
          <div className="d-flex align-items-center">
            <Link to="/" className="m-1 text-decoration-none text-light">
              Pizzería Mamma Mia!
            </Link>
            <Link
              to="/"
              className="btn btn-sm m-1 bg-dark text-decoration-none text-light border-light"
            >
              <FaPizzaSlice /> Home
            </Link>
            <Link
              to="/loginpage"
              className="btn btn-sm m-1 bg-dark text-decoration-none text-light border-light"
            >
              <IoIosLogIn /> Login
            </Link>
            <Link
              to="/registerpage"
              className="btn btn-sm m-1 bg-dark text-decoration-none text-light border-light"
            >
              <SiGnuprivacyguard /> Register
            </Link>
          </div>
        ) : (
          <div className="m-1 d-flex">
            <p className="m-3">Pizzería Mamma Mia!</p>
            <Link
              to="/"
              className="btn btn-sm m-1 text-decoration-none bg-dark"
            >
              <FaPizzaSlice />
              Home
            </Link>
            <Button variant="outline-light" className="btn-sm m-1 bg-dark">
              <CgProfile />
              Profile
            </Button>
            <Button variant="outline-light" className="btn-sm m-1 bg-dark">
              <IoIosLogOut />
              Logout
            </Button>
          </div>
        )}
      </div>
      <div className="d-flex align-items-center">
        <Link
          to="/cart"
          className="btn btn-sm bg-dark text-decoration-none m-1 text-info border-info"
        >
          <IoCartOutline /> Total: ${format(totalCart)}
        </Link>
        <Link
          to="/profile"
          className="btn btn-sm m-1 text-decoration-none bg-dark text-light border-light"
        >
          <CgProfile /> Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
