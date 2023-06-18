import React from "react";
import { Link } from "react-router-dom";
import NavHero from "../component/NavHero";
import Footer from "../component/Footer";

const About = () => {
  return (
    <div className="mt-6">
      <NavHero title={"About"} />
      {/* <div className="h-44 bg-[#DECBC0] flex items-center">
        <div className="container mx-auto">
          <Link className="text-4xl font-bold" to={"/"}>
            <span className="text-[#795744]">Home </span>/ About
          </Link>
        </div>
      </div> */}
      <div className=" container mx-auto flex flex-col gap-9 mt-10 justify-center lg:flex-row lg:gap-0 lg:px-20">
        <img className="max-w-lg max-h-lg" src="asset/image5.jpg" alt="" />
        <div className="flex flex-col gap-10 lg:px-20">
          <h1 className="text-5xl font-bold">
            Our Story
            <div className="w-28 h-1 mt-3 rounded-full bg-[#936A53]"></div>
          </h1>
          <p className="text-[#617D98]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
          <p className="text-[#617D98]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            fugit voluptate magnam, perferendis exercitationem cumque ex
            repudiandae repellendus laborum obcaecati ipsam nemo voluptatibus
            saepe pariatur. Repudiandae accusantium assumenda necessitatibus
            similique!
          </p>
          <p className="text-[#617D98]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            fugit voluptate magnam, perferendis exercitationem cumque ex
            repudiandae repellendus laborum obcaecati ipsam nemo voluptatibus
            saepe pariatur. Repudiandae accusantium assumenda necessitatibus
            similique!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
