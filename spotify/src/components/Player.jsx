import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";
const Player = () => {
	const {
		seekBg,
		seekBar,
		play,
		pause,
		playStatus,
		track,
		time,
		previous,
		next,
		seekSong,
		songsData,
	} = useContext(PlayerContext);

	const currentIndex = songsData.findIndex((song) => song._id === track?._id);

	const isFirstTrack = currentIndex === 0;
	const isLastTrack = currentIndex === songsData.length - 1;
	return track ? (
		<div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
			<div className="hidden lg:flex items-center gap-4">
				<img className="w-12" src={track.image} alt="" />
				<div>
					<p>{track.name}</p>
					<p>{track.desc.slice(0, 20)}</p>
				</div>
			</div>
			<div className="flex flex-col items-center gap-1 m-auto">
				<div className="flex gap-4">
					<img
						className="w-4 cursor-pointer"
						src={assets.shuffle_icon}
						alt=""
					/>

					<img
						onClick={!isFirstTrack ? previous : null}
						className={`w-4 ${isFirstTrack ? "opacity-40 " : "cursor-pointer"}`}
						src={assets.prev_icon}
						alt="prev"
					/>

					{playStatus ? (
						<img
							onClick={pause}
							className="w-4 cursor-pointer"
							src={assets.pause_icon}
							alt=""
						/>
					) : (
						<img
							onClick={play}
							className="w-4 cursor-pointer"
							src={assets.play_icon}
							alt=""
						/>
					)}

					<img
						onClick={!isLastTrack ? next : null}
						className={`w-4 ${isLastTrack ? "opacity-40 " : "cursor-pointer"}`}
						src={assets.next_icon}
						alt="next"
					/>
					<img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
				</div>
				<div className="flex items-center gap-5">
					<p>
						{time.currentTime.minute.toString().padStart(2, "0")}:
						{time.currentTime.second.toString().padStart(2, "0")}
					</p>
					<div
						onClick={seekSong}
						ref={seekBg}
						className="w-[250px]  sm:max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
					>
						<hr
							ref={seekBar}
							className="h-1 border-none  bg-green-800 rounded-full"
						/>
					</div>
					<p>
						{time.totalTime.minute.toString().padStart(2, "0")}:
						{time.totalTime.second.toString().padStart(2, "0")}
					</p>
				</div>
			</div>
			<div className="hidden lg:flex items-center gap-2 opacity-75">
				<img className="w-4" src={assets.plays_icon} alt="" />
				<img className="w-4" src={assets.mic_icon} alt="" />
				<img className="w-4" src={assets.queue_icon} alt="" />
				<img className="w-4" src={assets.speaker_icon} alt="" />
				<img className="w-4" src={assets.volume_icon} alt="" />
				<div className="w-20 bg-slate-50 h-1 rounded"></div>
				<img className="w-4" src={assets.mini_player_icon} alt="" />
				<img className="w-4" src={assets.zoom_icon} alt="" />
			</div>
		</div>
	) : null;
};

export default Player;
