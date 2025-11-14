import React from "react";
import product1 from "../../assets/jewelleryImgs/product1.jpg";
import product2 from "../../assets/jewelleryImgs/product1_hov.jpg";
import Container from "../common/Container";

// ----------------------------------
// Reusable Product Card
// ----------------------------------
const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="relative w-[274px] h-[350px] mt-[50px] group overflow-hidden cursor-pointer">

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
          <div className="flex justify-between items-center">

            <p className="absolute bottom-5 left-6 bg-white text-black px-4 py-2 rounded-md font-semibold">
              +
            </p>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-md font-semibold">
              Add to cart
            </div>

            <p className="absolute bottom-5 right-6 bg-white text-black px-4 py-2 rounded-md font-semibold">
              -
            </p>

          </div>
        </div>
      </div>

      {/* Text */}
      <div className="pt-[25px]">
        <p className="text-[14.5px] font-semibold">{product.name}</p>
        <p className="text-[14.5px]">{product.price}</p>
      </div>
    </div>
  );
};

// ----------------------------------
// Main Component
// ----------------------------------
const NewIn = () => {
  const products = [
    {
      front: product1,
      back: product2,
      name: "Snake Necklace",
      price: "100.00$ - 120.00$",
    },
    {
      front: product1,
      back: product2,
      name: "Diamond Bracelet",
      price: "150.00$ - 180.00$",
    },
    {
      front: product1,
      back: product2,
      name: "Golden Earrings",
      price: "80.00$ - 95.00$",
    },
    {
      front: product1,
      back: product2,
      name: "Classic Ring",
      price: "50.00$ - 70.00$",
    },
  ];

  return (
    <Container>
      <div className="py-[150px]">
        <h1
          style={{ fontFamily: "wagrika" }}
          className="text-4xl text-center"
        >
          New In
        </h1>

        <div className="flex justify-between flex-wrap gap-y-10">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NewIn;
