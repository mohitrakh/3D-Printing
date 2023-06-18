import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import MobileNav from "./MobileNav";
import { usePaintContext } from "../context/context";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  let { arr } = usePaintContext();
  let newArr = [...new Set(arr)];
  return (
    <div className="px-7 sm:px-3 lg:px-0 lg:container mx-auto pt-7 flex justify-between">
      <div className="flex items-center">
        <Link to={"/"}>
          <img className="logoImg" src="asset/logo-no-background.png" alt="" />
        </Link>
      </div>
      <nav className="items-center hidden lg:flex">
        <ul className="flex gap-10 text-xl">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
          <li>
            <Link to={"/checkout"}>Checkout</Link>
          </li>
        </ul>
      </nav>
      <div className="items-center hidden lg:flex relative">
        <span className="absolute top-0 -right-3 bg-red-600 w-5 font-[5px] flex justify-center rounded-full text-white h-5 items-center">
          {newArr.length}
        </span>
        <FaShoppingCart className="text-3xl text-black" />
      </div>
      <div
        className="flex items-center lg:hidden"
        onClick={() => setOpenNav(!openNav)}
      >
        <GiHamburgerMenu className="text-3xl cursor-pointer" />
      </div>
      {openNav && <MobileNav openNav={openNav} setOpenNav={setOpenNav} />}
    </div>
  );
};

export default Navbar;
