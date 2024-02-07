import React from "react";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const Hamburger = ({ onclick }) => {
  return (
    <div className="hamburger md:hidden onClick={onclick}">
      <img src={hamburger} className=" " />
      <img src={close} className=" absolute" />
    </div>
  );
};

export default Hamburger;
