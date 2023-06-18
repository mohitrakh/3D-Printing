import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { usePaintContext } from "../context/context";

const MobileNav = ({ openNav, setOpenNav }) => {
  let { arr } = usePaintContext();
  let newArr = [...new Set(arr)];
  return (
    <div className=" absolute top-28 w-[90%] bg-white shadow-xl p-5 lg:hidden">
      <nav>
        <ul className="flex gap-5 flex-col text-xl">
          <li>
            <Link to={"/"} onClick={() => setOpenNav(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} onClick={() => setOpenNav(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/products"} onClick={() => setOpenNav(false)}>
              Products{" "}
            </Link>
          </li>
          <li>
            <Link to={"checkout"} onClick={() => setOpenNav(false)}>
              Checkout
            </Link>
          </li>
        </ul>
        <div className="items-center mt-7 relative w-12 ">
          <span className="absolute -top-3 right-1  bg-red-600 w-5 font-[5px] flex justify-center rounded-full text-white h-5 items-center">
            {newArr.length}
          </span>
          <FaShoppingCart className="text-3xl text-black" />
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
