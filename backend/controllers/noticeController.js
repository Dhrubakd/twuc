const multer = require("multer");
const path = require("path");
const fs = require("fs");
const noticeModel = require("../models/noticeModel");

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/notices"); // Save PDFs in uploads/notices folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Upload Notice
const uploadNotice = (req, res) => {
  const { title } = req.body;
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "No file uploaded" });
  }

  const pdfPath = `/uploads/notices/${req.file.filename}`; // PDF file path for serving
  noticeModel.insertNotice(title, pdfPath, (err) => {
    if (err) {
      console.error("Database error:", err);
      return res
        .status(500)
        .json({ success: false, message: "Failed to upload notice" });
    }
    res
      .status(201)
      .json({
        success: true,
        message: "Notice uploaded successfully",
        pdfPath,
      });
  });
};

// Get All Notices
const getAllNotices = (req, res) => {
  noticeModel.getAllNotices((err, results) => {
    if (err) {
      console.error("Error fetching notices:", err);
      return res
        .status(500)
        .json({ success: false, message: "Failed to fetch notices" });
    }
    res.status(200).json(results);
  });
};

// Delete Notice
const deleteNotice = (req, res) => {
  const { id } = req.params;
  noticeModel.getNoticeById(id, (err, notice) => {
    if (err || !notice) {
      return res
        .status(404)
        .json({ success: false, message: "Notice not found" });
    }

    const filePath = `.${notice.pdfPath}`;
    fs.unlink(filePath, (fsErr) => {
      if (fsErr) console.error("Failed to delete file:", fsErr);

      noticeModel.deleteNoticeById(id, (dbErr) => {
        if (dbErr) {
          return res
            .status(500)
            .json({ success: false, message: "Failed to delete notice" });
        }
        res
          .status(200)
          .json({ success: true, message: "Notice deleted successfully" });
      });
    });
  });
};

module.exports = {
  upload,
  uploadNotice,
  getAllNotices,
  deleteNotice,
};
