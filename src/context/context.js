import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import arrayOfObjects from "../constants/array";

const PaintContext = createContext();

const ContextProvider = ({ children }) => {
  const [product, setProduct] = useState("");

  const [arr, setArr] = useState([]);
  // console.log(arr);
  // const removeDelete = (id) => {
  //   setArr((prev) => prev.filter((p) => p.id !== id));
  //   console.log(id);
  // };
  return (
    <PaintContext.Provider value={{ product, setProduct, arr, setArr }}>
      {children}
    </PaintContext.Provider>
  );
};

const usePaintContext = () => {
  return useContext(PaintContext);
};

export { ContextProvider, usePaintContext };
