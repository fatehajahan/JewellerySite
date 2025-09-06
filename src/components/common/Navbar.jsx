import React, { useState, useRef, useEffect } from "react";
import { CiHeart, CiMail, CiSearch, CiUser } from "react-icons/ci";
import logo from "../../assets/jewelleryImgs/logo.png";
import { BsBag } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import NavHome from "../NavItems/NavHome";
import Login from "../../Pages/Login/Login";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { removeUser } from "../../slices/userSlice";

const Navbar = () => {
    const data = useSelector((state) => state.userDetails.currentUser)
    console.log(data)

    const [openDropdown, setOpenDropdown] = useState(null);
    const [loginOpen, setLoginOpen] = useState(false);
    const navbarRef = useRef(null);
    const dispatch = useDispatch()

    const handleDropdownToggle = (itemId) => {
        setOpenDropdown(openDropdown === itemId ? null : itemId);
    };

    const handleLoginToggle = () => {
        setLoginOpen(!loginOpen);
    };

    // Close dropdown function to pass to child components
    const closeDropdown = () => {
        setOpenDropdown(null);
    };

    // Close login function to pass to Login component
    const closeLogin = () => {
        setLoginOpen(false);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setOpenDropdown(null);
                setLoginOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogOut = () =>{
        dispatch(removeUser())
        setLoginOpen(false)
    }

    const navItem = [
        { name: "Home", Link: "/", id: 1 },
        { name: "Shop", Link: "/", id: 2 },
        { name: "Product", Link: "/", id: 3 },
        { name: "Blog", Link: "/", id: 4 },
        { name: "Featured", Link: "/", id: 5 },
    ];

    return (
        <div className="select-none" ref={navbarRef}>
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="w-[10%]">
                    <img src={logo} alt="Logo" />
                </Link>

                {/* Nav Items */}
                <div className="flex gap-x-[30px] text-[18px]">
                    {navItem.map((item) => (
                        <div onClick={() => handleDropdownToggle(item.id)} key={item.id} className="relative flex items-center gap-x-[7px] cursor-pointer">
                            <p>{item.name}</p>

                            {/* Icons */}
                            <div className="transition-transform duration-200 ease-in-out">
                                {openDropdown === item.id ? (
                                    <FaChevronUp className="text-[14px] transform rotate-0 text-[#6d6d6db5]" />
                                ) : (
                                    <FaChevronDown className="text-[14px] transform rotate-0 text-[#6d6d6db5]" />
                                )}
                            </div>

                            {/* Dropdown Component */}
                            {openDropdown === item.id && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50">
                                    <NavHome onClose={closeDropdown} />
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

                        {data ? loginOpen && <div className="fixed top-20 right-[10%] bg-white rounded-lg shadow-lg border border-gray-200 p-4 min-w-[280px]">
                            {/* Header with avatar and basic info */}
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                                    {data.name}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 text-lg">{data.name}</h3>
                                    <p className="text-sm text-gray-500">Professional</p>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-2 border-t border-gray-100 pt-3">
                                <div className="flex items-center space-x-2 text-gray-600">
                                    <CiUser className="w-4 h-4" />
                                    <span className="text-sm">{data.name}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-600">
                                    <CiMail className="w-4 h-4" />
                                    <span className="text-sm">{data.email}</span>
                                </div>
                            </div>

                            {/* Action buttons */}
                            <div className="mt-4 pt-3 border-t border-gray-100 flex space-x-2">
                                <button onClick={handleLogOut} className="flex-1 px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors font-bold cursor-pointer">
                                    LogOut
                                </button>
                                <button className="flex-1 px-3 py-2 text-sm border border-gray-200 text-gray-600 rounded-md hover:bg-gray-50 transition-colors">
                                    Settings
                                </button>
                            </div>
                        </div> :
                            loginOpen && (
                                <div className="absolute top-full right-[-700%] mt-5 w-[300px] bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50">
                                    <Login onClose={closeLogin} />
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