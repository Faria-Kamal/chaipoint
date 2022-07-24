import React from "react";
import "./Navbar.css";

import { IoSearch } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="nav-brand">
        CHAIPOINT
      </a>
      <a className="main-nav">
        <a href="#" className="nav-link">
          Home
        </a>

        <a href="#shop" className="nav-link">
          Shop Now
        </a>

        <a href="#offers" className="nav-link">
          Offerrs
        </a>

        <a href="#offers" className="nav-link">
          Blog
        </a>

        <a href="#contact" className="nav-link">
          Contact Us
        </a>
      </a>

      <div>
        <AiOutlineUser />
      </div>
      <div>
        {" "}
        <FiShoppingCart />
      </div>
      <div>
        <IoSearch />
      </div>
    </nav>
  );
};

export default Navbar;
