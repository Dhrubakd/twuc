const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photoController");

router.post(
  "/upload",
  photoController.upload.single("photo"),
  photoController.uploadPhoto
); // Upload photo
router.get("/", photoController.getAllPhotos); // Fetch all photos
router.delete("/:id", photoController.deletePhoto); // Delete photo

module.exports = router;
