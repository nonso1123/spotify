import React from "react";

const Navbar = () => {
	return (
		<div className="navbar w-full border-b-2 border-gray-800 flex justify-between items-center px-5 sm:px-12 py-4 text-lg">
			<p>Admin panel</p>
			<button className="bg-black py-1 px-3 rounded-full text-[15px] cursor-pointer text-white">
				<a href="https://spotify-sy0g.onrender.com/">Home</a>
			</button>
		</div>
	);
};

export default Navbar;
