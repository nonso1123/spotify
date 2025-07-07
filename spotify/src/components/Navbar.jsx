import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="w-full flex justify-between items-center font-semibold">
				<div className="flex items-center gap-2">
					<img
						onClick={() => navigate(-1)}
						className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
						src={assets.arrow_left}
						alt=""
					/>
					<img
						onClick={() => navigate(1)}
						className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
						src={assets.arrow_right}
						alt=""
					/>
				</div>
				<div className="flex items-center gap-4">
					<button className="bg-white py-1 px-3 rounded-2xl text-[15px] cursor-pointer text-black">
						<a href="https://spotify-admin-worh.onrender.com">Add Song</a>
					</button>
					<p className="bg-white text-black  sm:text-[15px] text-[12px] px-4 py-1 rounded-full hidden md:block cursor-pointer">
						Explore Premium
					</p>
					<p className="bg-black py-1 px-3 rounded-full sm:text-[15px] text-[12px] cursor-pointer">
						Install App{" "}
					</p>
				</div>
			</div>
		</>
	);
};

export default Navbar;
