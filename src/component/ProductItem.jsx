import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ id, name, colors, image, company, price }) => {
  return (
    <div className="max-w-sm overflow-hidden p-5  mt-5 cursor-pointer">
      <div>
        <img className="h-52 w-96 object-cover" src={image} alt="" />
      </div>
      <div className="flex justify-between pt-2">
        <h1 className="text-xl">{name}</h1>
        <p className="text-xl text-[#C5A491]">&#8377; {price}</p>
      </div>
      <div className="flex justify-center mt-2">
        <Link
          to={`${id}`}
          className="btn p-2 rounded-md text-[13px] bg-[#795744] text-white"
        >
          View More details
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
