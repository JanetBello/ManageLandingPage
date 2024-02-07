import logo from "../images/logo.svg";
import close from "../images/icon-close.svg";
import hamburger from "../images/icon-hamburger.svg";
import Buttons from "../button";
import Hamburger from "./Hamburger";
import { useState } from "react";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className=" flex justify-between">
      <div>
        <img src={logo} alt="" />
      </div>

      <div className=" hidden md:flex">
        <ul className=" flex gap-7">
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Communities</a>
          </li>
        </ul>
      </div>
      <Hamburger />

      <div className="hidden md:block">
        <Buttons />
      </div>
    </nav>
  );
};
export default NavBar;
