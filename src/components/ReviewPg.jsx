import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import company01 from '../assets/jewelleryImgs/rev01.png'
import company02 from '../assets/jewelleryImgs/rev02.png'
import company03 from '../assets/jewelleryImgs/rev03.png'
import company04 from '../assets/jewelleryImgs/rev04.png'
import company05 from '../assets/jewelleryImgs/rev05.png'
import Container from './common/Container'

const ReviewPg = () => {

    const reviews = [
        {
            text: "“If you’re looking for luxury products and professional service, look no further. I had a great experience while purchasing my IWC luxury watch...”",
            author: "ANANA - PHOTOGRAPHER"
        },
        {
            text: "“Amazing service and premium quality jewellery. The customer support was beyond expectations!”",
            author: "SARAH - DESIGNER"
        },
        {
            text: "“I ordered a gold bracelet and the craftsmanship is incredible. Highly recommended.”",
            author: "MICHAEL - ENTREPRENEUR"
        }
    ];

    return (
        <div className='bg-[#f6f3ef] py-[60px] md:py-[100px] my-[60px] md:my-[100px]'>
            <Container>

                {/* ⭐ Swipable Review Section */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    grabCursor={true}
                >
                    {reviews.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="px-5">
                                <p
                                    style={{ fontFamily: "wagrika" }}
                                    className='text-[18px] md:text-[22px] text-center max-w-[650px] mx-auto leading-relaxed'
                                >
                                    {item.text}
                                </p>

                                <p className='text-[#b9b7b6] py-[15px] md:py-[20px] text-center text-[14px] md:text-[16px]'>
                                    {item.author}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* ⭐ Responsive Company Logos */}
                <div className='mt-10 grid grid-cols-3 sm:grid-cols-5 gap-5 sm:gap-10 place-items-center'>
                    <img src={company01} alt="logo1" className='w-[60px] sm:w-[90px] md:w-[110px] object-contain' />
                    <img src={company02} alt="logo2" className='w-[60px] sm:w-[90px] md:w-[110px] object-contain' />
                    <img src={company03} alt="logo3" className='w-[60px] sm:w-[90px] md:w-[110px] object-contain' />
                    <img src={company04} alt="logo4" className='w-[60px] sm:w-[90px] md:w-[110px] object-contain' />
                    <img src={company05} alt="logo5" className='w-[60px] sm:w-[90px] md:w-[110px] object-contain' />
                </div>

            </Container>
        </div>
    )
}

export default ReviewPg
