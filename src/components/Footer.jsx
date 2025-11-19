import React from "react";

const Footer = () => {
    return (
        <footer className="text-[#2d2d2d] py-[20px]">
            <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[50px]">

                {/* Contact Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p className="mb-2">Tower of London, London EC3N 4AB, United Kingdom.</p>
                    <p className="mb-2">(+84) 123 567 712</p>
                    <p className="mb-2">jewelryshop@gmail.com</p>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
                    <ul className="space-y-2">
                        <li>Faq</li>
                        <li>Size guide</li>
                        <li>Shipping</li>
                        <li>Order status</li>
                        <li>Exchanges</li>
                    </ul>
                </div>

                {/* About Us */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">About Us</h3>
                    <ul className="space-y-2">
                        <li>Our Shops</li>
                        <li>Contact</li>
                        <li>Artists</li>
                        <li>Local Giving</li>
                        <li>Press</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="w-full">
                    <h3 className="text-xl font-semibold mb-4">Join Our Community</h3>
                    <p className="mb-4">Enter your email...</p>

                    {/* Email Input */}
                    <div className="flex md:flex-row flex-col items-center gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-4 py-2 border border-gray-400 rounded-md outline-none"
                        />

                        {/* Signup Button (#63512d) */}
                        <button
                            className="px-5 py-2 w-[150px] font-semibold hover:text-black border border-[#63512d] bg-[#63512d] text-white hover:bg-transparent transition duration-500 cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom footer line */}
            <div className="mt-10 border-t border-gray-400 pt-4 text-center text-sm">
                © {new Date().getFullYear()} Jewelry Shop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
