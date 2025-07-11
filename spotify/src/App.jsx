import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
	const { audioRef, track, songsData } = useContext(PlayerContext);

	return (
		<div className="h-screen  bg-black">
			{songsData.length !== 0 ? (
				<>
					<div className="h-[90%] flex">
						<Sidebar />
						<Display />
					</div>
					<Player />
				</>
			) : (
				<div className="grid place-items-center min-h-[80vh] text-white">
					<div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
					Loading... Please wait
				</div>
			)}

			<audio
				src={track ? track.file : null}
				ref={audioRef}
				preload="auto"
			></audio>
		</div>
	);
};

export default App;
