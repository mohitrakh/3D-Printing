import React from "react";
import Hero from "../component/Hero";
import Featured from "../component/Featured";
import Cta from "../component/Cta";
import News from "../component/News";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Featured />
      <Cta />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
