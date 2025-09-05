import React from "react";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import logo from "../../assets/jewelleryImgs/logo.png";
import { BsBag } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import NavHome from "../NavItems/NavHome";

const Navbar = () => {
    const navItem = [
        { name: "Home", Link: "/", id: 1 },
        { name: "Shop", Link: "/", id: 2 },
        { name: "Product", Link: "/", id: 3 },
        { name: "Blog", Link: "/", id: 4 },
        { name: "Featured", Link: "/", id: 5 },
    ]
    return (
        <div>
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="w-[10%]">
                    <img src={logo} alt="Logo" />
                </div>

                {/* Nav Items */}
                <div className="flex gap-x-[30px] text-[18px]">
                    {/* Home + Dropdown */}
                    {
                        navItem.map((item, index) => (
                            <div key={index} className="relative group flex items-center gap-x-[7px] cursor-pointer">
                                <p>{item.name}</p>

                                {/* Icons */}
                                <FaChevronDown className="text-[14px] group-hover:hidden transition-all duration-300" />
                                <FaChevronUp className="hidden text-[14px] group-hover:inline-block transition-all duration-300" />

                                {/* Dropdown Component */}
                                <div
                                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg 
                         opacity-0 scale-95 pointer-events-none 
                         group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto 
                         transition-all duration-300 ease-in-out z-50"
                                >
                                    <NavHome />
                                </div>
                            </div>
                        ))
                    }

                </div>

                {/* Icons */}
                <div className="flex gap-x-[10px]">
                    <CiSearch className="text-[24px] cursor-pointer" />
                    <CiUser className="text-[24px] cursor-pointer" />
                    <CiHeart className="text-[24px] cursor-pointer" />
                    <BsBag className="text-[24px] cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
