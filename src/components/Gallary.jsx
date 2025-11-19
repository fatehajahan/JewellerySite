import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import braceletImg from "../assets/jewelleryImgs/gallary2.jpg";
import ringImg from "../assets/jewelleryImgs/gallary3.jpg";
import earringImg from "../assets/jewelleryImgs/gallary4.jpg";
import heroImg from "../assets/jewelleryImgs/gallary1.jpg";
import { Link } from "react-router-dom";

const Gallary = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section
      style={{ fontFamily: "wagrika" }}
      className="px-4 py-10 w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* LEFT BIG IMAGE */}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="relative overflow-hidden group rounded-md"
        >
          <img
            src={heroImg}
            alt="Sophisticated Simple"
            className="w-full h-[350px] md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex flex-col justify-center p-8 bg-black/20">
            <h2 className="text-white text-4xl md:text-5xl font-light leading-tight drop-shadow-md">
              Sophisticated <br /> Simple
            </h2>

            <button className=" cursor-pointer mt-5 px-6 py-2 border border-white text-white font-semibold hover:bg-[#462700] transition duration-500">
              <Link to="/all-products">
                Shop Now
              </Link>
            </button>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="grid grid-cols-2 grid-rows-2 gap-4"
        >
          {/* Bracelets (big block) */}
          <div className="relative col-span-2 overflow-hidden group rounded-md">
            <img
              src={braceletImg}
              alt="Bracelets"
              className="w-full h-full md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <p className="absolute bottom-4 left-4 text-white text-2xl font-light drop-shadow-md">
              Bracelets
            </p>
          </div>

          {/* Rings */}
          <div className="relative overflow-hidden group rounded-md">
            <img
              src={ringImg}
              alt="Rings"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <p className="absolute bottom-4 left-4 text-white text-xl font-light drop-shadow-md">
              Rings
            </p>
          </div>

          {/* Earrings */}
          <div className="relative overflow-hidden group rounded-md">
            <img
              src={earringImg}
              alt="Earrings"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <p className="absolute bottom-4 left-4 text-white text-xl font-light drop-shadow-md">
              Earrings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallary;
