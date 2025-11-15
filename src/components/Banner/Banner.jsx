import React, { useEffect } from 'react';
import Container from '../common/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
      offset: 120,
    });
  }, []);

  return (
    <div className="w-full">
      <div className="bg-banner bg-cover bg-no-repeat bg-center h-screen flex items-center">
        <Container>

          {/* TEXT SECTION */}
          <div
            className="text-center md:text-left max-w-xl"
            style={{ fontFamily: "wagrika" }}
            data-aos="fade-right"
          >
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Luxuriate in the
            </h1>

            <h1 className="text-4xl md:text-5xl mt-1 leading-tight">
              Allure of Fine Gold
            </h1>

            <p className="text-sm md:text-base pt-4 text-black/80">
              Helps perfect the appearance of women with elegance & style.
            </p>
          </div>

          {/* BUTTON */}
          <div
            className="mt-6 md:mt-8 text-center md:text-left"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <button className="px-7 py-2.5 font-semibold border border-black text-black
               hover:bg-[#462700] hover:text-white transition duration-700">
              Shop Now
            </button>
          </div>

        </Container>
      </div>
    </div>
  );
};

export default Banner;
