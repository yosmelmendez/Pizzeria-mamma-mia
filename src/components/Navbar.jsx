import React from "react";
import { Button } from "react-bootstrap";
import { format } from "../utils/format";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaPizzaSlice } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const total = 25000;
  const token = true;
  return (
    <div className="d-flex justify-content-between bg-dark text-light">
      <div>
        {token ? (
          <div className="d-flex align-items-center">
            <p className="m-1">Pizzería Mamma Mia!</p>
            <Button variant="outline-light" className="btn-sm m-1 bg-dark">
              <FaPizzaSlice />
              Home
            </Button>
            <Button variant="outline-light" className="btn-sm m-1 bg-dark">
              <IoIosLogIn />
              Login
            </Button>
            <Button variant="outline-light" className="btn-sm m-1 bg-dark">
              <SiGnuprivacyguard />
              Register
            </Button>
          </div>
        ) : (
          <div className="m-1 d-flex">
            <p className="m-3">Pizzería Mamma Mia!</p>
            <Button variant="outline-light" className=" btn-sm m-1 bg-dark">
              <FaPizzaSlice />
              Home
            </Button>
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
      <div className="d-flex m-1">
        <Button variant="outline-info" className="btn-sm bg-dark">
          <IoCartOutline />
          Total: ${format(total)}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
