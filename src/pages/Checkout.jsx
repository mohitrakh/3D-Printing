import React from "react";
import NavHero from "../component/NavHero";
import { FiTrash2 } from "react-icons/fi";
import { usePaintContext } from "../context/context";
import arrayOfObjects from "../constants/array";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
const Checkout = () => {
  const { arr, setArr } = usePaintContext();
  let newArr = [...new Set(arr)];
  let totalAmount = 0;

  newArr.forEach((x) => {
    let newX = Number(x);
    let newItem = arrayOfObjects.find((item) => item.id === newX);
    totalAmount += newItem.price;
  });

  const handleDelete = (id) => {
    setArr((prev) => prev.filter((p) => p !== id));
  };

  return (
    <div>
      <NavHero title={"checkout"} />
      <div className="container mx-auto">
        <br />

        <Link
          to={"/products"}
          className="btn lg:mx-0 mx-5 p-2 rounded-md text-white bg-[#936A53]"
        >
          continue shopping
        </Link>
        {newArr.map((item) => {
          let productID = Number(item);
          let newItem = arrayOfObjects.find((prod) => prod.id === productID);
          let { image, name, price } = newItem;
          return (
            <div className="container mx-auto mt-10 flex items-center justify-around">
              <div className="w-[300px] flex gap-5 items-center">
                <img
                  className="w-[150px] h-[100px] object-cover max-w-[150px] max-h-[100px] rounded-lg"
                  src={image}
                  alt=""
                />
                <h1 className="text-xl">{name}</h1>
              </div>
              <div className="flex justify-center">
                <p className="text-xl text-[#AB7A5F]">&#8377;{price}</p>
              </div>
              <div className="flex justify-center">
                <FiTrash2
                  className="text-xl cursor-pointer"
                  onClick={() => handleDelete(item)}
                />
              </div>
            </div>
          );
        })}

        <div className=" container mx-auto flex flex-col mt-6  max-w-md gap-3">
          <div className="border border-gray-500 p-5">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Subtotal:</h1>
              <p>&#8377;{Math.round(totalAmount)}</p>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">shipping fee:</h1>
              <p>&#8377; 30</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Order Total:</h1>
              <p>&#8377; {Math.round(totalAmount + 30)}</p>
            </div>
          </div>
          <button className="w-full p-1 rounded-md text-white bg-[#AB7A5F]">
            Purchase
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
