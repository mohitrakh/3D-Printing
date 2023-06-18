import React from "react";
import { usePaintContext } from "../context/context";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="lg:container mx-auto mt-[100px] lg:px-[150px]">
      <div className="flex flex-col gap-y-5 gap-x-5 lg:flex-row">
        <div className=" flex flex-col gap-y-10 p-10 justify-center lg:w-1/2">
          <h1 className="text-5xl font-bold text-[#102a42] ">
            Purchase 3D Paintings Here!!
          </h1>
          <p className="text-[#617d98] line-clamp-15">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            quibusdam necessitatibus, omnis ducimus neque debitis illo nam ullam
            error facilis alias dolor rerum obcaecati accusamus expedita
            voluptatibus quos quidem perferendis esse dolorem, ad sint sunt
            quaerat cupiditate! Eligendi, vel asperiores.
          </p>
          <Link
            to={"/products"}
            className="btn flex justify-center bg-[#AB7A5F] p-3 w-[150px] rounded-md text-white"
          >
            Shop Now!
          </Link>
        </div>
        <div className="hidden lg:flex lg:w-1/2">
          <img className="bgImg" src="asset/heroImg.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
