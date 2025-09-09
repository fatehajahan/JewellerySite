import React, { useEffect } from 'react'
import Container from '../common/Container'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true }) // duration in ms
  }, [])

  return (
    <div>
      <div className='bg-banner bg-cover bg-no-repeat bg-center md:pt-[100px] md:pb-[80px] h-screen flex items-center md:justify-center md:bg-fixed'>
        <Container>
          <div
            style={{ fontFamily: "wagrika" }}
            className='text-4xl md:text-left text-center'
            data-aos="fade-right"
            data-aos-delay="500"
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
            data-aos-delay="200" className='bg-[#000] text-white py-[10px] w-[120px] text-center mt-[25px] cursor-pointer hover:bg-transparent transition-all duration-500 hover:text-black font-semibold'>
            <p>Shop Now</p>
          </div>
      </Container>
      </div>
    </div>
  )
}

export default Banner
