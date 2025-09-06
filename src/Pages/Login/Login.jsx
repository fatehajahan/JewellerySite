import React, { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const Login = ({ onClose }) => {
    const handleRegistrationClick = () => {
        onClose();
    };
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const handleInputChange = (e) => {
        e.preventDefault();
        console.log('first')
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        if (!formData.email || !formData.password) {
            return toast.error("All fields are required")
        }
        axios.post("http://localhost:3000/api/v1/auth/login", formData)
            .then((res) => {
                toast.success(res.data.message)
            })
            .catch((err) => {
                toast.error("login failed")
            })
    }
    return (
        <div className='p-5'>
            <ToastContainer
                position="bottom-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            {/* email */}
            <input onChange={handleInputChange} type="email" name='email' placeholder='Enter your Email ID' className='py-2 px-[15px] w-full border border-[#000]' />
            {/* password */}
            <div className='relative mt-3'>
                <input onChange={handleInputChange} type={showPassword ? "text" : "password"} name='password' placeholder='Create a Password' className='py-2 px-[15px] w-full border border-[#000]' />
                <div className='absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer'>
                    {
                        showPassword ? <IoEyeOffOutline onClick={handleShowPassword} /> : <IoEyeOutline onClick={handleShowPassword} />
                    }
                </div>
            </div>

            <div>
                <div onClick={handleSubmit} className='py-2 bg-[#000] text-white font-semibold cursor-pointer hover:bg-transparent hover:text-black mt-[25px] transition duration-700'>Log In</div>

                <p style={{
                    fontFamily: "wagrika"
                }} className='mt-[10px] text-[18px]'>Don't have an account? <Link onClick={handleRegistrationClick} to="/registration" className='text-[#280e0e] font-bold cursor-pointer'>Register</Link></p>
            </div>
        </div>
    )
}

export default Login