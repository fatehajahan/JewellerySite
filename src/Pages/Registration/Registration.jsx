import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import axios from "axios"
import { Bounce, toast, ToastContainer } from "react-toastify"

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const [formData, setFormData] = useState({
    name: "",
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
    // console.log('zdcz')
    if(!formData.name || ! formData.email || !formData.password){
      return toast.error("All fields are required")
    }
    axios.post("http://localhost:3000/api/v1/auth/registration", formData)
      .then((res) => {
        toast.success(res.data.message)
      })
      .catch((err) => {
        toast.error("registration failed")
      })
  }
  return (
    <div className='h-screen flex justify-center items-center select-none'>
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
      <div className="flex flex-col gap-10">
        <h1
          style={{
            fontFamily: "wagrika"
          }}
          className='text-7xl'>Create Account</h1>

        <div className="inputs">
          <div className="name flex flex-col gap-y-[25px]">
            {/* name */}
            <input onChange={handleInputChange} type="text" name='name' placeholder='Enter your Full Name' className='py-2 px-[15px] w-[600px] border border-[#000]' />
            {/* email */}
            <input onChange={handleInputChange} type="email" name='email' placeholder='Enter your Email ID' className='py-2 px-[15px] w-[600px] border border-[#000]' />
            {/* password */}
            <div className='relative'>
              <input onChange={handleInputChange} type={showPassword ? "text" : "password"} name='password' placeholder='Create a Password' className='py-2 px-[15px] w-[600px] border border-[#000]' />
              <div className='absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer'>
                {
                  showPassword ? <IoEyeOffOutline onClick={handleShowPassword} /> : <IoEyeOutline onClick={handleShowPassword} />
                }
              </div>
            </div>
          </div>

          <div>
            <div onClick={handleSubmit} className='py-2 bg-[#000] text-white font-semibold cursor-pointer hover:bg-transparent hover:text-black mt-[25px] transition duration-700'>Register</div>

            <p style={{
              fontFamily: "wagrika"
            }} className='mt-[10px] text-[18px]'>Already have an account? <Link to="/login" className='text-[#280e0e] font-bold cursor-pointer'>Log In</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration