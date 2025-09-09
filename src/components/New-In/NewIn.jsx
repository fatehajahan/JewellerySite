import React from 'react'
import product1 from '../../assets/jewelleryImgs/product1.jpg'
import product2 from '../../assets/jewelleryImgs/product1_hov.jpg'
import Container from '../common/Container'

const NewIn = () => {
  return (
    <Container>
      <div className='py-[150px]'>
        <h1 style={{
          fontFamily: "wagrika"
        }} className='text-4xl text-center'>New In</h1>

        <div className="relative w-[274px] h-[350px] mt-[50px] group overflow-hidden">
          {/* Default Image */}
          <img
            src={product1}
            alt="Product Front"
            className="absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
          />

          {/* Hover Image */}
          <img
            src={product2}
            alt="Product Back"
            className="absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
          />

          <p
            className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#fff] text-[#000] px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-50 cursor-pointer font-semibold"
          >
            Add to cart
          </p>
        </div>

      </div>
    </Container>
  )
}

export default NewIn