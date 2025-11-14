import React, { useState, useRef, useEffect } from "react";
import { CiHeart, CiMail, CiSearch, CiUser } from "react-icons/ci";
import logo from "../../assets/jewelleryImgs/logo.png";
import { BsBag } from "react-icons/bs";
import { FaBars, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { RiCloseLine, RiMenu5Fill } from "react-icons/ri";

import NavHome from "../NavItems/NavHome";
import Login from "../../Pages/Login/Login";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { removeUser } from "../../slices/userSlice";
import Container from "./Container";

const Navbar = () => {
    const data = useSelector((state) => state.userDetails.currentUser)
    console.log(data)

    const cartData = useSelector((state) => state.cartDetails.cartItems)
    console.log(cartData)

    const navigate = useNavigate()
    const [cartNumber, setCartNumber] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);
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

    const handleLogOut = () => {
        dispatch(removeUser())
        setLoginOpen(false)
        navigate("/login")
    }

    const handleCartNumber = () => {

    }

    const navItem = [
        { name: "Home", Link: "/", id: 1 },
        { name: "Shop", Link: "/", id: 2 },
        { name: "Product", Link: "/", id: 3 },
        { name: "Blog", Link: "/", id: 4 },
        { name: "Featured", Link: "/", id: 5 },
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <Container>
                <div className="select-none" ref={navbarRef}>
                    <div>
                        {/* Logo */}
                        <div className="flex justify-between items-center ">
                            <Link to="/" className="md:w-[7%]">
                                <img src={logo} alt="Logo" className="md:w-[300px] w-[120px]" />
                            </Link>

                            <div className="hidden md:flex justify-between items-center gap-x-[70px] ">
                                {/* Nav Items */}
                                <div className="flex gap-x-[30px] text-[18px]">
                                    {navItem.map((item) => (
                                        <div onClick={() => handleDropdownToggle(item.id)} key={item.id} className="relative flex items-center gap-x-[7px] cursor-pointer">
                                            <p className="text-[14px]">{item.name}</p>

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
                                                <div
                                                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50">
                                                    <NavHome onClose={closeDropdown} />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Icons */}
                                <div className="flex gap-x-[10px]">
                                    <CiSearch className="text-[17px] cursor-pointer" />
                                    <div className="relative">
                                        <CiUser className="text-[17px] cursor-pointer" onClick={handleLoginToggle} />

                                        {data ? loginOpen && <div
                                            className="fixed top-20 right-[10%] bg-white rounded-lg shadow-lg border border-gray-200 p-4 min-w-[280px]">
                                            {/* Header with avatar and basic info */}
                                            <div className="flex items-center space-x-3 mb-3">
                                                <div
                                                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
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
                                                <button onClick={handleLogOut}
                                                    className="flex-1 px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors font-bold cursor-pointer">
                                                    LogOut
                                                </button>
                                                <button
                                                    className="flex-1 px-3 py-2 text-sm border border-gray-200 text-gray-600 rounded-md hover:bg-gray-50 transition-colors">
                                                    Settings
                                                </button>
                                            </div>
                                        </div> :
                                            loginOpen && (
                                                <div
                                                    className="absolute top-full right-[-700%] mt-5 w-[300px] bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50">
                                                    <Login onClose={closeLogin} />
                                                </div>
                                            )}
                                    </div>
                                    <CiHeart className="text-[17px] cursor-pointer" />
                                    <Link to="/myCart" className="relative">
                                        {
                                            cartData.length > 0 && <div className="absolute -top-1 -right-2 bg-[#2c2929] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                                {cartData.length > 9 ? <p className='text-[12px] font-semibold text-white text-center'>9+</p> : <p className='text-[12px] text-white font-semibold text-center'>{cartData.length}</p>}
                                            </div>
                                        }

                                        <BsBag className="text-[17px] cursor-pointer" />
                                    </Link>
                                </div>
                            </div>

                            <div className="flex justify-end md:hidden z-50">
                                <button onClick={() => setMenuOpen(!menuOpen)}>
                                    {menuOpen ? (
                                        <RiCloseLine className="text-2xl text-gray-800" />
                                    ) : (
                                        <RiMenu5Fill className="text-2xl text-gray-800" />
                                    )}
                                </button>
                            </div>
                        </div>


                        {/* Mobile Menu */}
                        <div div className={`md:hidden flex flex-col justify-between gap-x-[70px] overflow-hidden transform transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] origin-top ${menuOpen
                            ? "max-h-[600px] opacity-100 scale-y-100"
                            : "max-h-0 opacity-0 scale-y-95"}`}
                        >
                            {/* Nav Items */}
                            <div className="flex flex-col gap-y-[10px] text-[18px] mt-[25px]">
                                {navItem.map((item) => (
                                    <div
                                        onClick={() => handleDropdownToggle(item.id)}
                                        key={item.id}
                                        className="relative flex items-center gap-x-[7px] cursor-pointer"
                                    >
                                        <p className="text-[14px]">{item.name}</p>

                                        {/* Icons */}
                                        <div className="transition-transform duration-200 ease-in-out">
                                            {openDropdown === item.id ? (
                                                <FaChevronUp className="text-[14px] text-[#6d6d6db5]" />
                                            ) : (
                                                <FaChevronDown className="text-[14px] text-[#6d6d6db5]" />
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
                            <div className="flex gap-x-[10px] mt-[25px]">
                                <CiSearch className="text-[17px] cursor-pointer" />
                                <Link to="/login">
                                    <CiUser
                                        className="text-[17px] cursor-pointer"
                                        onClick={handleLoginToggle}
                                    />
                                </Link>
                                <CiHeart className="text-[17px] cursor-pointer" />
                                <BsBag className="text-[17px] cursor-pointer" />
                            </div>
                        </div >
                    </div>
                </div>
            </Container >
        </div>
    );
};

export default Navbar;