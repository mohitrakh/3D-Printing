import React, { useState } from "react";
import NavHero from "../component/NavHero";
import ProductItem from "../component/ProductItem";
import arrayOfObjects from "../constants/array";
import { usePaintContext } from "../context/context";
import Footer from "../component/Footer";

const Products = () => {
  const [product, setProduct] = useState("");
  return (
    <div>
      <NavHero title={"Products"} />
      <div className=" p-6 lg:p-0 lg:container mx-auto mt-5">
        <div className="flex justify-center">
          <form action="">
            <input
              type="text"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className=" outline-none w-96 h-9 rounded-md px-3 bg-[#EADED7] text-black"
              placeholder="enter product name"
            />
          </form>
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
          {arrayOfObjects
            .filter((item) => {
              return product.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(product);
            })
            .map((p, index) => {
              return <ProductItem key={index} {...p} />;
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
