import React from 'react'
import perfection from '../assets/jewelleryImgs/perfection.jpg'
import Container from './common/Container'

const Perfection = () => {
    return (
        <div className='bg-[#f6f3ef] md:p-0 p-[50px]  my-[60px] md:my-[100px]'>
            <div className='md:flex items-center justify-between'>
                <div className='md:w-1/2 flex flex-col justify-center items-center'>
                    <div>
                        <h2 className='text-[45px] text-center'>Chic Petal Perfection</h2>
                        <p className='md:w-[400px] md:py-[15px] py-[20px] md:text-left text-center'>Jewelry is favored by both men and women because it shows luxury & class; own aesthetic taste, affirming position…</p>
                        <button
                            className="px-5 py-2 w-[150px] hover:text-white font-semibold text-black bg-transparent border border-[#63512d]  hover:bg-[#63512d] transition duration-500 cursor-pointer"
                        >
                            Shop Now
                        </button>
                    </div>
                </div>

                <div className='md:w-1/2 group overflow-hidden'>
                    <img src={perfection} alt="" className='w-full h-full md:h-full object-cover transition-transform duration-700 group-hover:scale-105' />
                </div>
            </div>
        </div>
    )
}

export default Perfection