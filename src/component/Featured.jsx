import React from "react";
import { Link } from "react-router-dom";
import arrayOfObjects from "../constants/array";

const Featured = () => {
  return (
    <section id="featured" className="mt-40 bg-[#F1F5F8] py-16">
      <div className="container mx-auto pt-16">
        <h1 className="h1 text-5xl font-bold text-[#102A42] text-center">
          Featured Products
        </h1>
        <div className="mx-auto mt-3 mb-3  w-32 h-1 bg-[#936A53] rounded-full"></div>
        <div className="flex flex-wrap justify-center mt-10 ">
          {arrayOfObjects.slice(1, 4).map((item) => {
            const { image, price, company, id, name } = item;
            return (
              <div className="cursor-pointer">
                <a href="#" className="block max-w-sm p-6">
                  <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    <img className="w-96 h-52" src={image} alt="" />
                  </div>
                  <div className="font-normal text-black-700 text-xl flex justify-between  ">
                    <p>{name}</p>
                    <p className="text-[#B99179]">&#8377; {price}</p>
                  </div>
                </a>
                <div className="flex justify-center mt-2">
                  <Link
                    to={`products/${id}`}
                    className="btn p-2 rounded-md text-[13px] bg-[#795744] text-white"
                  >
                    View More details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to={"/products"}
            className="btn bg-[#795744] p-3 w-[150px] rounded-md text-white text-center"
          >
            All products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
