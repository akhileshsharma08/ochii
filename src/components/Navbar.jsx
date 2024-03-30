import React from "react";
import Logo from '../assets/ochi.svg'

const Navbar = () => {
  return (
    <div className="navbar w-full h-16 px-8 bg-transparent  text-zinc-800 flex justify-between items-center">
      <div className="logo w-20 h-8">
        <img className="w-full h-full" src={Logo} alt="ochi logo" />
      </div>
      <ul className=" menulist flex justify-center items-center gap-5">
        <li>Services</li>
        <li>Our Works </li>
        <li>About Us</li>
        <li>Insights</li>
      </ul>

      <h5>Contact us</h5>
    </div>
  );
};

export default Navbar;
