import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { GrDiamond } from "react-icons/gr";
import { GrNotes } from "react-icons/gr";
const Cta = () => {
  return (
    <section id="cta" className="bg-[#eaded7]">
      <div className="mx-auto lg:container lg:px-16 py-14">
        <div className="px-10 py-12 pt-16 flex flex-col gap-y-11 lg:flex-row mb-7">
          <div className="flex flex-col lg:w-1/2 text-[#453227]">
            <h1 className="text-4xl font-bold">Made Paintings</h1>
            <h1 className="text-4xl font-bold">Only For you</h1>
          </div>
          <div className="flex flex-col lg:w-1/2">
            <p className="text-[#936A53]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              ipsam nobis incidunt laudantium, magnam ad, aperiam exercitationem
              placeat libero fugit adipisci animi aliquam temporibus omnis!
            </p>
          </div>
        </div>
        <div className=" justify-center px-10 flex flex-wrap gap-8 items-center ">
          <div className="max-w-sm p-5 bg-[#C5A491] flex flex-col gap-5 items-center">
            <div className="bg-[#EADED7] p-3 rounded-full">
              <AiOutlineCompass className="text-5xl" />
            </div>
            <h1 className="text-2xl font-bold text-[#453227]">Mission</h1>
            <p className="text-[#795744] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              voluptas reprehenderit perspiciatis optio minima debitis
              aspernatur quam. Ducimus, provident esse.
            </p>
          </div>
          <div className="max-w-sm p-5 bg-[#C5A491] flex flex-col gap-5 items-center">
            <div className="bg-[#EADED7] p-3 rounded-full">
              <GrDiamond className="text-5xl" />
            </div>
            <h1 className="text-2xl font-bold text-[#453227]">Vision</h1>
            <p className="text-[#795744] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              voluptas reprehenderit perspiciatis optio minima debitis
              aspernatur quam. Ducimus, provident esse.
            </p>
          </div>
          <div className="max-w-sm p-5 bg-[#C5A491] flex flex-col gap-5 items-center">
            <div className="bg-[#EADED7] p-3 rounded-full">
              <GrNotes className="text-5xl" />
            </div>
            <h1 className="text-2xl font-bold text-[#453227]">History</h1>
            <p className="text-[#795744] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              voluptas reprehenderit perspiciatis optio minima debitis
              aspernatur quam. Ducimus, provident esse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
