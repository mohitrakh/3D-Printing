import React from "react";
import { Link } from "react-router-dom";

const NavHero = ({ title }) => {
  return (
    <div className="h-44 bg-[#DECBC0] flex items-center mt-10 px-5 lg:px-0 ">
      <div className="container mx-auto">
        <Link className="text-4xl font-bold" to={"/"}>
          <span className="text-[#795744]">Home </span>/ {title}
        </Link>
      </div>
    </div>
  );
};

export default NavHero;
