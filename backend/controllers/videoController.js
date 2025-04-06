const multer = require("multer");
const fs = require("fs");
const path = require("path");
const videoModel = require("../models/videoModel");

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/videos"); // Save files in uploads/videos directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Upload Video
const uploadVideo = (req, res) => {
  const { category } = req.body;
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "No file uploaded" });
  }
  const videoPath = `/uploads/videos/${req.file.filename}`; // Add `/videos/` in the path

  videoModel.insertVideo(videoPath, category, (err) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to upload video" });
    }
    res
      .status(201)
      .json({
        success: true,
        message: "Video uploaded successfully",
        videoPath,
      });
  });
};

// Get All Videos
const getAllVideos = (req, res) => {
  videoModel.getAllVideos((err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to fetch videos" });
    }
    res.status(200).json(results);
  });
};

// Delete Video
const deleteVideo = (req, res) => {
  const { id } = req.params;

  // Fetch the video to delete the file from uploads
  videoModel.getVideoById(id, (err, video) => {
    if (err || !video) {
      return res
        .status(404)
        .json({ success: false, message: "Video not found" });
    }

    const videoPath = `.${video.src}`; // File path

    // Delete the file from the uploads directory
    fs.unlink(videoPath, (fsErr) => {
      if (fsErr) console.error("Failed to delete file:", fsErr);

      // Delete the video record from the database
      videoModel.deleteVideoById(id, (dbErr) => {
        if (dbErr) {
          return res
            .status(500)
            .json({ success: false, message: "Failed to delete video" });
        }
        res
          .status(200)
          .json({ success: true, message: "Video deleted successfully" });
      });
    });
  });
};

module.exports = {
  upload,
  uploadVideo,
  getAllVideos,
  deleteVideo,
};
