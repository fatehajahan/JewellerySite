import React, { useEffect } from 'react'
import Container from '../common/Container'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
    <div>
      <div className='bg-banner bg-cover bg-no-repeat bg-center md:pt-[100px] md:pb-[80px] h-screen flex items-center md:justify-center '>
        <Container>
          <div
            style={{ fontFamily: "wagrika" }}
            className='text-4xl md:text-left text-center'
           data-aos="fade-right"
          >
            <h1
              className='font-semibold'
            >
              Luxuriate in the
            </h1>
            <h1
            >
              Allure of Fine Gold
            </h1>
            <p
              className='text-[12px] pt-[12px]'

            >
              Hepls Perfect the appearance of women...
            </p>
          </div>

          <div data-aos="fade-right"
            data-aos-delay="200" >
            <button className="mt-4 px-6 py-2 font-semibold border border-[#000] text-black hover:bg-[#462700] hover:text-white transition cursor-pointer duration-700">
              Shop Now
            </button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Banner
