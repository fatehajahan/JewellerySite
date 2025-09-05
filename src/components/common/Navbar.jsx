import React from 'react'
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import logo from '../../assets/jewelleryImgs/logo.png'
import { BsBag } from 'react-icons/bs';
import { FaAngleDown } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center ">
                <div className='w-[10%]'>
                    <img src={logo} alt="" className='' />
                </div>

                <div className='flex gap-x-[30px] text-[18px]'>
                    <div className='flex items-center gap-x-[2px] cursor-pointer'>
                        <p>Home</p>
                        <FaAngleDown className=''/>
                    </div>
                    <div>Shop</div>
                    <div>Product</div>
                    <div>Blog</div>
                    <div>Featured</div>
                </div>

                <div className='flex gap-x-[10px]'>
                    <CiSearch className='text-[24px] cursor-pointer'/>
                    <CiUser className='text-[24px] cursor-pointer'/>
                    <CiHeart className='text-[24px] cursor-pointer'/>
                    <BsBag className='text-[24px] cursor-pointer'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar