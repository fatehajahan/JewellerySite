import React from 'react'
import perfection from '../assets/jewelleryImgs/perfection.jpg'
import Container from './common/Container'

const Perfection = () => {
    return (
        <div className='bg-[#f6f3ef] md:p-0 p-[50px]  my-[60px] md:my-[100px]'>
            <div className='md:flex items-center justify-between'>
                <div className='w-1/2 flex flex-col justify-center items-center'>
                    <h2 className='text-[45px]'>Chic Petal Perfection</h2>
                    <p className='w-[400px]'>Jewelry is favored by both men and women because it shows luxury & class; own aesthetic taste, affirming position…</p>
                </div>

                <div className='w-1/2 group overflow-hidden'>
                    <img src={perfection} alt="" className='w-full h-full md:h-full object-cover transition-transform duration-700 group-hover:scale-105'/>
                </div>
            </div>
        </div>
    )
}

export default Perfection