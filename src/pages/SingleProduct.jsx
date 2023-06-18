import React from "react";
import NavHero from "../component/NavHero";
import { Link, useParams } from "react-router-dom";
import arrayOfObjects from "../constants/array";
import { usePaintContext } from "../context/context";
import Footer from "../component/Footer";

const SingleProduct = () => {
  const { setArr, arr } = usePaintContext();
  const { id } = useParams();
  let productID = Number(id);
  let objectSingle = arrayOfObjects.find((item) => item.id === productID);

  return (
    <div className="">
      <NavHero title={objectSingle.name} />
      <div className="p-12 lg:container lg:mt-10 lg:mx-auto flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-4">
          <Link
            to={"/products"}
            className="bg-[#936A53] text-white w-40 px-4 py-2 rounded-md"
          >
            Back to shopping
          </Link>
          <img
            className="lg:max-w-lg lg:max-h-[500px] max-h-[500px] object-cover"
            src={objectSingle.image}
            alt=""
          />
        </div>
        <div className="mt-16 flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-4xl mb-2 text-[#102A42]">
              {objectSingle.name}
            </h1>
            <p className="text-[#AB7A5F] text-xl font-bold mb-3">
              &#8377; {objectSingle.price}
            </p>
            <div className="lg:pr-24 flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam velit perspiciatis optio laboriosam cumque. Quasi, nulla
                voluptate! Ut nulla a recusandae. Nulla veniam odio dolorem. Ad
                cupiditate officia aspernatur eos. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Cum obcaecati eveniet magnam
                quasi. Voluptates necessitatibus vel, atque consequatur
                perspiciatis itaque laudantium cum, minus odio praesentium
                voluptatem vitae excepturi quia quasi? Lorem ipsum dolor sit
                amet consectetur
              </p>
              <p>
                adipisicing elit. Nesciunt neque omnis nam alias repellat
                placeat, optio doloribus provident exercitationem dolor vero,
                laborum deleniti quis vitae voluptatum sint? Impedit
                exercitationem, fugit autem officiis dicta ea. Fuga asperiores
                obcaecati aliquid, id atque, assumenda facilis, corrupti libero
                in sequi repellat magni et accusantium?
              </p>
              <p>
                adipisicing elit. Nesciunt neque omnis nam alias repellat
                placeat, optio doloribus provident exercitationem dolor vero,
                laborum deleniti quis vitae voluptatum sint? Impedit
                exercitationem, fugit autem officiis dicta ea. Fuga asperiores
                obcaecati aliquid, id atque, assumenda facilis, corrupti libero
                in sequi repellat magni et accusantium?
              </p>
            </div>
            <p className="text-xl mt-4">
              <span className="text-[#102A42] font-bold">Company :</span>{" "}
              {objectSingle.company}
            </p>
          </div>
          <Link
            to={"/checkout"}
            className="btn p-3 w-28 mt-5
           text-white rounded-md bg-[#936A53]"
            onClick={() => setArr([...arr, id])}
          >
            Add to cart
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
