const express = require("express");
const videoController = require("../controllers/videoController");

const app = express();
app.use(express.json());

app.post("/upload", videoController.upload.single("video"), videoController.uploadVideo); // Upload video
app.get("/", videoController.getAllVideos); // Get all videos
app.delete("/:id", videoController.deleteVideo); // Delete video

module.exports = app;
