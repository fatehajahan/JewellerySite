import React, { useState } from 'react'
import { Star } from "lucide-react";

const ReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [active, setActive] = useState("description");

    return (
        <div className="mb-[80px]">

            {/* Tabs */}
            <div className="flex border-t items-center gap-x-[18px] cursor-pointer pb-[50px] font-urbanist text-[20px]">
                <p
                    className={`p-2 w-1/2 transition-all duration-300 ${active === "description"
                            ? "border-b-2 border-[#63512d] font-bold text-[#63512d]"
                            : "text-gray-600"
                        }`}
                    onClick={() => setActive("description")}
                >
                    Description
                </p>

                <p
                    className={`p-2 w-1/2 transition-all duration-300 ${active === "review"
                            ? "border-b-2 border-[#63512d] font-bold text-[#63512d]"
                            : "text-gray-600"
                        }`}
                    onClick={() => setActive("review")}
                >
                    Review
                </p>
            </div>

            {/* Smooth fade animation container */}
            <div className="relative min-h-[300px]">

                {/* Description Section */}
                <div
                    className={`transition-all duration-500 absolute top-0 left-0 w-full ${active === "description"
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-4 pointer-events-none"
                        }`}
                >
                    <div className="font-cormot text-[35px]">Product description</div>
                    <p className="font-cormot text-[17px] pt-[15px] text-justify">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima nesciunt consequatur neque accusamus quasi architecto autem, nihil voluptas doloremque, atque velit dolor corporis dicta magnam officiis! Quidem cum assumenda magnam numquam facere ab aliquid ea blanditiis odio, sed quasi ducimus et tempore deleniti eius, a dolor labore. Natus, veritatis voluptatibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, atque voluptas sit ipsa dicta soluta quis vero alias placeat animi perferendis dignissimos illum totam tempora eos velit a quaerat accusamus consectetur sed aliquam molestias deleniti! Voluptas, ex voluptatem iure consequuntur vel, ipsam minima pariatur alias rem nemo, blanditiis quidem tempore.
                    </p>
                </div>

                {/* Review Section */}
                <div
                    className={`transition-all duration-500 absolute top-0 left-0 w-full ${active === "review"
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4 pointer-events-none"
                        }`}
                >
                    <div className="w-full mx-auto border p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">
                            Be the first to review <span className="font-bold">“Cool Blue Parfum”</span>
                        </h2>
                        <p className="text-sm text-gray-600">
                            Your email address will not be published. Required fields are marked *
                        </p>

                        {/* Star Rating */}
                        <div className="mt-4">
                            <p className="text-sm font-semibold">Your rating *</p>
                            <div className="flex gap-1 mt-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={20}
                                        className={`cursor-pointer ${(hover || rating) >= star
                                                ? "text-yellow-500"
                                                : "text-gray-400"
                                            }`}
                                        onMouseEnter={() => setHover(star)}
                                        onMouseLeave={() => setHover(0)}
                                        onClick={() => setRating(star)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Review Input */}
                        <div className="mt-4">
                            <label className="text-sm font-semibold">Your review *</label>
                            <textarea
                                rows="4"
                                className="w-full mt-1 p-2 border rounded focus:ring focus:ring-blue-300"
                                placeholder="Write your review here..."
                            ></textarea>
                        </div>

                        {/* Name & Email */}
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-semibold">Name *</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 p-2 border rounded focus:ring focus:ring-blue-300"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-semibold">Email *</label>
                                <input
                                    type="email"
                                    className="w-full mt-1 p-2 border rounded focus:ring focus:ring-blue-300"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        {/* Save Info */}
                        <div className="mt-4 flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <label className="text-sm">
                                Save my name, email, and website for next time.
                            </label>
                        </div>

                        {/* Submit */}
                        <button className="mt-4 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                            Submit
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReviewForm;
