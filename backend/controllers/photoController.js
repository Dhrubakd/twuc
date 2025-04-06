const multer = require("multer");
const fs = require("fs");
const path = require("path");
const photoModel = require("../models/photoModel");

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/photos"); // Save files in uploads/photos directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Upload Photo
const uploadPhoto = (req, res) => {
  const { category } = req.body;
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "No file uploaded" });
  }
  const photoPath = `/uploads/photos/${req.file.filename}`; // Add `/photos/` in the path

  photoModel.insertPhoto(photoPath, category, (err) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to upload photo" });
    }
    res
      .status(201)
      .json({
        success: true,
        message: "Photo uploaded successfully",
        photoPath,
      });
  });
};

// Get All Photos
const getAllPhotos = (req, res) => {
  photoModel.getAllPhotos((err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to fetch photos" });
    }
    res.status(200).json(results);
  });
};

// Delete Photo
const deletePhoto = (req, res) => {
  const { id } = req.params;

  // Fetch the photo to delete the file from uploads
  photoModel.getPhotoById(id, (err, photo) => {
    if (err || !photo) {
      return res
        .status(404)
        .json({ success: false, message: "Photo not found" });
    }

    const photoPath = `.${photo.src}`; // File path

    // Delete the file from the uploads directory
    fs.unlink(photoPath, (fsErr) => {
      if (fsErr) console.error("Failed to delete file:", fsErr);

      // Delete the photo record from the database
      photoModel.deletePhotoById(id, (dbErr) => {
        if (dbErr) {
          return res
            .status(500)
            .json({ success: false, message: "Failed to delete photo" });
        }
        res
          .status(200)
          .json({ success: true, message: "Photo deleted successfully" });
      });
    });
  });
};

module.exports = {
  upload,
  uploadPhoto,
  getAllPhotos,
  deletePhoto,
};
