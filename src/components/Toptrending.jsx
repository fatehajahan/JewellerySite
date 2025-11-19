import React from "react";
// Product Images
import product5 from "../assets/jewelleryImgs/product5.jpg";
import product5Hover from "../assets/jewelleryImgs/product5_hov.jpg";
import product6 from "../assets/jewelleryImgs/product6.jpg";
import product6Hover from "../assets/jewelleryImgs/product6_hov.jpg";
import product7 from "../assets/jewelleryImgs/product7.jpg";
import product7Hover from "../assets/jewelleryImgs/product7_hov.jpg";
import product8 from "../assets/jewelleryImgs/product8.jpg";
import product8Hover from "../assets/jewelleryImgs/product8_hov.jpg";

import Container from "./common/Container";

const ProductCard = ({ product }) => {
  const productsData = [
    {
      id: 1,
      name: "Royal Diamond Necklace",
      price: "$120.00",
      front: product5,
      back: product5Hover,
    },
    {
      id: 2,
      name: "Classic Gold Earrings",
      price: "$85.00",
      front: product6,
      back: product6Hover,
    },
    {
      id: 3,
      name: "Elegant Wedding Ring",
      price: "$150.00",
      front: product7,
      back: product7Hover,
    },
    {
      id: 4,
      name: "Pearl Bracelet Set",
      price: "$99.00",
      front: product8,
      back: product8Hover,
    },
  ];

  console.log(productsData)
  return (
    <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] mx-auto">
      <div className="relative w-full h-[300px] sm:h-[320px] md:h-[350px] mt-[30px] group overflow-hidden cursor-pointer">

        {/* Default Image */}
        <img
          src={product.front}
          alt="Front"
          className="absolute w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
        />

        {/* Hover Image */}
        <img
          src={product.back}
          alt="Back"
          className="absolute w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        />

        {/* Hover Buttons */}
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex justify-between items-center absolute bottom-5 w-full px-5">
            <p className="bg-white text-black px-3 py-2 rounded-md font-semibold">
              +
            </p>

            <div className="bg-white text-black px-3 py-2 rounded-md font-semibold">
              Add to cart
            </div>

            <p className="bg-white text-black px-3 py-2 rounded-md font-semibold">
              -
            </p>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="pt-4 text-center">
        <p className="text-[14.5px] font-semibold">{product.name}</p>
        <p className="text-[14.5px]">{product.price}</p>
      </div>
    </div>
  );
};

// Main Component
const Toptrending = () => {
  const products = [
    {
      front: product5,
      back: product5Hover,
      name: "Snake Necklace",
      price: "100.00$ - 120.00$",
    },
    {
      front: product6,
      back: product6Hover,
      name: "Diamond Bracelet",
      price: "150.00$ - 180.00$",
    },
    {
      front: product7,
      back: product7Hover,
      name: "Golden Earrings",
      price: "80.00$ - 95.00$",
    },
    {
      front: product8,
      back: product8Hover,
      name: "Classic Ring",
      price: "50.00$ - 70.00$",
    },
  ];

  return (
    <Container>
      <div className="py-[80px] md:py-[150px]">
        <h1
          style={{ fontFamily: "wagrika" }}
          className="text-3xl sm:text-4xl text-center"
        >
          Top Trending
        </h1>

        <div className="flex flex-wrap justify-center gap-5 sm:gap-7 md:gap-10 mt-10">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Toptrending;
