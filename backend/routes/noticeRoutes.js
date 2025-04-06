const express = require("express");
const router = express.Router();
const noticeController = require("../controllers/noticeController");

router.post(
  "/upload",
  noticeController.upload.single("pdfFile"),
  noticeController.uploadNotice
); // Upload PDF
router.get("/", noticeController.getAllNotices); // Fetch all Notices
router.delete("/:id", noticeController.deleteNotice); // Delete Notice

module.exports = router;
