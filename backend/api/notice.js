const express = require("express");
const noticeController = require("../controllers/noticeController");

const app = express();
app.use(express.json());

app.post("/upload", noticeController.upload.single("pdfFile"), noticeController.uploadNotice); // Upload notice
app.get("/", noticeController.getAllNotices); // Get all notices
app.delete("/:id", noticeController.deleteNotice); // Delete notice

module.exports = app;
