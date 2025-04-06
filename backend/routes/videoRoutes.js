const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");

router.post(
  "/upload",
  videoController.upload.single("video"),
  videoController.uploadVideo
); // Upload video
router.get("/", videoController.getAllVideos); // Fetch all videos
router.delete("/:id", videoController.deleteVideo); // Delete video

module.exports = router;
