import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/albumModel.js";

const addAlbum = async (req, res) => {
	try {
		const name = req.body.name;
		const desc = req.body.desc;
		const bgColor = req.body.bgColor;
		const imageFile = req.file;
		const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
			resource_type: "image",
		});

		const albumData = {
			name,
			desc,
			bgColor,
			image: imageUpload.secure_url,
		};
		const album = await albumModel(albumData);
		await album.save();
		res.json({ success: true, message: "Album added successfully" });
	} catch (error) {
		res.json({ success: false, error: error.message });
		console.error("Add Album Error:", error);
	}
};

const listAlbum = async (req, res) => {
	try {
		const allAlbums = await albumModel.find({});
		res.json({ success: true, albums: allAlbums });
	} catch (error) {
		res.json({ success: false, error: error.message });
	}
};

const removeAlbum = async (req, res) => {
	try {
		await albumModel.findByIdAndDelete(req.body.id);
		res.json({ success: true, message: "Album removed successfully" });
	} catch (error) {
		res.json({ success: false, error: error.message });
	}
};

export { addAlbum, listAlbum, removeAlbum };
