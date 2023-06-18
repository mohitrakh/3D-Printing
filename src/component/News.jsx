import React from "react";

const News = () => {
  return (
    <section id="news" className="mt mt-[7%]">
      <div className="lg:container px-10 mx-auto flex flex-col gap-x-10 lg:flex-row">
        <div className="flex flex-col gap-7 lg:w-1/2">
          <h1 className="text-3xl font-bold text-[#453227]">
            Join our newsletter and get 20% off
          </h1>
          <p className="text-slate-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            vitae impedit architecto, possimus ipsa error deserunt atque.
            Nesciunt iure voluptates eveniet nam similique aut alias!
          </p>
        </div>
        <div className="mt-5 max-h-max lg:h-11 max-w-max flex lg:flex lg:w-1/2 border border-black">
          <form action="">
            <input
              type="text"
              className="w-96 h-full outline-none px-4 text-black"
              placeholder="enter your e-mail address"
            />
            <button className="btn p-2 text-white bg-[#AB7A5F] h-full w-24">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default News;
