import React from "react";
import { Link } from "react-router-dom"
// Product Images
import { productsData } from "../data";
import Container from "./common/Container";

// Main Component

const NewIn = () => {

  return (
    <Container>
      <div className="w-full py-[100px]">
        <h2 className="text-4xl text-center pb-[50px]">New-In</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {productsData.slice(0,3).map((pro) => (
            <Link to={`/product-details/${pro.id}`}
              key={pro.id} onClick={() => handleClick(pro.id)}>
              <div
                className="relative w-full h-[260px] sm:h-[300px] md:h-[350px] mt-[10px] group overflow-hidden cursor-pointer rounded-md"
              >
                {/* Front Image */}
                <img
                  src={pro.front}
                  alt="Front"
                  className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500 group-hover:opacity-0"
                />

                {/* Hover Image */}
                <img
                  src={pro.back}
                  alt="Back"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Hover Buttons */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex justify-between items-center absolute bottom-3 sm:bottom-5 w-full px-3 sm:px-5">
                    <p className="bg-white text-black px-3 py-2 rounded-md font-semibold">+</p>

                    <div className="bg-white text-black px-3 py-2 rounded-md font-semibold">
                      Add to cart
                    </div>

                    <p className="bg-white text-black px-3 py-2 rounded-md font-semibold">-</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center group">
                <p className="text-sm text-gray-500 tracking-wide uppercase">
                  {pro.category}
                </p>

                <p className="text-lg font-semibold text-gray-900 mt-1 group-hover:text-[#b88b5a] transition-all duration-300">
                  {pro.name}
                </p>

                <p className="text-[17px] font-medium text-[#b88b5a] mt-1">
                  {pro.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NewIn;
