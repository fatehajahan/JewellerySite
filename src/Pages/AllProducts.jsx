import React from 'react';
import allBan1 from '../assets/jewelleryImgs/allBan1.jpg';
import allBan2 from '../assets/jewelleryImgs/allBan2.jpg';
import allBan3 from '../assets/jewelleryImgs/allBan3.jpg';
import allBan4 from '../assets/jewelleryImgs/allBan4.jpg';
import Container from '../components/common/Container';

import { productsData } from '../data';
import { Link } from 'react-router-dom';

const handleSingleProduct = (id) => {
  console.log("clicked product :", id)
}
const AllProducts = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="bg-allProducts bg-cover bg-no-repeat bg-center py-[50px] md:py-[150px] px-4">
        <h1 className="text-center text-white uppercase text-3xl sm:text-4xl md:text-5xl md:py-5 pt-[100px]">
          All Products
        </h1>

        <div className="flex flex-wrap justify-center gap-5 sm:gap-[35px] mt-5">
          {[{ img: allBan1, label: "Pendent" },
          { img: allBan2, label: "Bracelet" },
          { img: allBan3, label: "Jewels" },
          { img: allBan4, label: "Necklace" }].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={item.img}
                alt={item.label}
                className="md:w-[80px] md:h-[80px] w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] object-cover cursor-pointer rounded-full border border-transparent hover:border-white duration-500 p-[5px]"
              />
              <p className="text-white text-sm sm:text-base mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <Container>
        <div className="py-10 lg:flex flex-col md:flex-row gap-10 md:gap-[25px] px-4">

          {/* Sidebar */}
          <div className="w-full md:w-[25%] lg:w-[20%]">

            {/* Category Section */}
            <div>
              <h2 className="text-[22px] sm:text-[25px] font-semibold">Category</h2>
              <div className="flex flex-col gap-y-3 pt-3 text-[14px] text-[#6f6f6f]">
                <p>Necklace <span>(0)</span></p>
                <p>Earrings <span>(0)</span></p>
                <p>Ring <span>(0)</span></p>
                <p>Bracelet <span>(0)</span></p>
              </div>
            </div>

            {/* Price Range */}
            <div className="py-5">
              <h2 className="text-[22px] sm:text-[25px] font-semibold mb-4">Price Range</h2>
              <div className="flex flex-col gap-4">
                {/* Slider */}
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="10"
                  className="w-full accent-[#000] cursor-pointer"
                />

                {/* Price Display */}
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>$0</span>
                  <span>$500</span>
                </div>

                {/* Selected Range Box */}
                <div className="border border-gray-300 bg-white rounded-lg py-2 px-3 text-center shadow-sm">
                  <p className="text-gray-700 text-sm">
                    Selected: <span className="font-semibold text-[#c4a27d]">$120 – $350</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Products Grid */}
          <div className="w-full md:w-[63%] lg:w-[80%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

              {productsData.map((pro) => (
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
        </div>
      </Container>
    </div>
  );
};

export default AllProducts;
