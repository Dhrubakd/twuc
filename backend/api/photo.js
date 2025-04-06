const express = require("express");
const photoController = require("../controllers/photoController");

const app = express();
app.use(express.json());

app.post("/upload", photoController.upload.single("photo"), photoController.uploadPhoto); // Upload photo
app.get("/", photoController.getAllPhotos); // Get all photos
app.delete("/:id", photoController.deletePhoto); // Delete photo

module.exports = app;
