import React, { useState } from 'react';
import ear1 from '../../assets/jewelleryImgs/ear01.jpg';
import ear2 from '../../assets/jewelleryImgs/ear02.jpg';
import ear3 from '../../assets/jewelleryImgs/ear03.jpg';
import ear4 from '../../assets/jewelleryImgs/ear04.jpg';
import payment from '../../assets/jewelleryImgs/payment.png'
import Container from '../../components/common/Container';
import { CiClock2 } from 'react-icons/ci';
import { FaFacebookF, FaPinterest } from 'react-icons/fa';
import { RiLinkedinFill, RiTwitterXLine } from 'react-icons/ri';

const ProductDetails = () => {
    const images = [ear1, ear2, ear3, ear4];
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <Container>
            <div className="py-[80px] md:py-[130px] grid grid-cols-1 lg:grid-cols-2 gap-[40px]">

                {/* --------------------- LEFT IMAGES --------------------- */}
                <div className="flex flex-col md:flex-row gap-[20px] items-center">

                    {/* Thumbnails */}
                    <div className="flex md:flex-col flex-row gap-[15px]">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt=""
                                onClick={() => setSelectedImage(img)}
                                className={` 
                                    w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px]
                                    cursor-pointer border rounded-md transition duration-300
                                    ${selectedImage === img ? "border-black" : "border-gray-300"}
                                `}
                            />
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="flex justify-center w-full">
                        <img
                            src={selectedImage}
                            alt="Main"
                            className="
                                w-[260px] sm:w-[330px] md:w-[400px] lg:w-[450px]
                                rounded-md
                            "
                        />
                    </div>
                </div>

                {/* --------------------- RIGHT DETAILS --------------------- */}
                <div className="flex flex-col gap-y-[15px]">
                    {/* produduct text */}
                    <div>
                        <h2 className="uppercase text-[28px] sm:text-[32px] md:text-[35px] font-semibold">
                            Chicago Hoops
                        </h2>

                        <p className="text-[20px] sm:text-[22px] md:text-[23px]">
                            40.00$ – 60.00$
                        </p>

                        <p className="text-[#474747] text-[14px] sm:text-[15px] md:text-[16px] leading-6 max-w-[500px]">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Itaque, voluptatibus! Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quibusdam corporis animi nulla.
                        </p>
                    </div>

                    {/* Quantity + Cart */}
                    <div className="flex gap-x-[10px] pt-2">
                        {/* Qty Box */}
                        <div className="grid grid-cols-3 w-[120px] text-center border border-[#f5f4f2] rounded-md">
                            <p className="py-2 cursor-pointer hover:bg-[#63512d] hover:text-white transition duration-300">+</p>
                            <p className="py-2">1</p>
                            <p className="py-2 cursor-pointer hover:bg-[#63512d] hover:text-white transition duration-300">-</p>
                        </div>

                        {/* Add to Cart */}
                        <div className="
                            w-[150px] sm:w-[180px] md:w-[200px] 
                            py-2 text-center cursor-pointer 
                            text-white bg-[#63512d] font-semibold 
                            hover:bg-transparent hover:text-black 
                            border border-[#63512d]
                            transition duration-300
                        ">
                            Add to Cart
                        </div>
                    </div>

                    {/* Shop Now */}
                    <div className="
                        bg-[#9f8550] w-full py-[10px] text-center text-white
                        hover:bg-transparent border border-[#9f8550]
                        hover:text-black transition duration-300 cursor-pointer
                        mt-2
                    ">
                        Shop Now
                    </div>

                    {/* payment method section */}
                    <div className='py-[20px] bg-[#f3f3f3] w-full'>
                        <img src={payment} alt="" className='mx-auto ' />
                        <p className='text-center py-[10px]'>Guaranteed Checkout</p>
                    </div>

                    <div className='flex items-center gap-x-[10px]'>
                        <CiClock2 className='text-[30px]' />
                        <p>Delivers in: 3-7 Working Days <span className='underline font-semibold cursor-pointer hover:text-[#9f8550] transition duration-500'>Shipping & Return</span>
                        </p>
                    </div>

                    {/* divide line */}
                    <span className='bg-[#9f855067] h-[1px] my-[10px] w-full'></span>

                    {/* product info */}
                    <div className="space-y-1 text-sm text-gray-600">
                        <p>
                            <span className="font-semibold text-gray-900">SKU:</span> VN00189
                        </p>

                        <p>
                            <span className="font-semibold text-gray-900">Categories:</span> Bracelets, Necklaces
                        </p>

                        <p>
                            <span className="font-semibold text-gray-900">Tags:</span> Hot, Trend
                        </p>

                        <p>
                            <span className="font-semibold text-gray-900">Brand:</span> Mejuri
                        </p>

                        <div className='flex items-center gap-x-[5px]'>
                            <span className="font-semibold text-gray-900">Share:</span>
                            <div className='flex items-center gap-3 cursor-pointer'>
                                <FaFacebookF />
                                <RiTwitterXLine />
                                <RiLinkedinFill />
                                <FaPinterest />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProductDetails;
