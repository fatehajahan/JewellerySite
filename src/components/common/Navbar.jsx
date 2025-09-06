import React, { useState } from "react";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import logo from "../../assets/jewelleryImgs/logo.png";
import { BsBag } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import NavHome from "../NavItems/NavHome";
import Login from "../../Pages/Login/Login";

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [loginOpen, setLoginOpen] = useState(false);

    const handleDropdownToggle = (itemId) => {
        setOpenDropdown(openDropdown === itemId ? null : itemId);
    };

    const handleLoginToggle = () => {
        setLoginOpen(!loginOpen);
    };

    const navItem = [
        { name: "Home", Link: "/", id: 1 },
        { name: "Shop", Link: "/", id: 2 },
        { name: "Product", Link: "/", id: 3 },
        { name: "Blog", Link: "/", id: 4 },
        { name: "Featured", Link: "/", id: 5 },
    ];

    // Close dropdown function to pass to child components
    const closeDropdown = () => {
        setOpenDropdown(null);
    };

    // Close login function to pass to Login component
    const closeLogin = () => {
        setLoginOpen(false);
    };

    return (
        <div className="select-none">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="w-[10%]">
                    <img src={logo} alt="Logo" />
                </div>

                {/* Nav Items */}
                <div className="flex gap-x-[30px] text-[18px]">
                    {navItem.map((item) => (
                        <div onClick={() => handleDropdownToggle(item.id)} key={item.id} className="relative flex items-center gap-x-[7px] cursor-pointer">
                            <p >{item.name}</p>

                            {/* Icons */}
                            <div className="transition-transform duration-200 ease-in-out">
                                {openDropdown === item.id ? (
                                    <FaChevronUp className="text-[14px] transform rotate-0" />
                                ) : (
                                    <FaChevronDown className="text-[14px] transform rotate-0" />
                                )}
                            </div>

                            {/* Dropdown Component */}
                            {openDropdown === item.id && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50">
                                    <NavHome onClose={closeDropdown}/>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Icons */}
                <div className="flex gap-x-[10px]">
                    <CiSearch className="text-[24px] cursor-pointer" />
                    <div className="relative">
                        <CiUser
                            className="text-[24px] cursor-pointer"
                            onClick={handleLoginToggle}
                        />
                        {loginOpen && (
                            <div className="absolute top-full right-[-700%] mt-5 w-[300px] bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50">
                                <Login onClose={closeLogin}/>
                            </div>
                        )}
                    </div>
                    <CiHeart className="text-[24px] cursor-pointer" />
                    <BsBag className="text-[24px] cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;