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
        <li>Works </li>
        <li>About </li>
        <li className="md:mr-0 mr-4">Insights</li>
      </ul>

      <h5>Contact </h5>
    </div>
  );
};

export default Navbar;
