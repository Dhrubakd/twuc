require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const adminRoutes = require("./routes/adminRoutes");
const photoRoutes = require("./routes/photoRoutes");
const videoRoutes = require("./routes/videoRoutes");
const noticeRoutes = require("./routes/noticeRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(
  "/uploads/photos",
  express.static(path.join(__dirname, "uploads/photos"))
);
app.use(
  "/uploads/videos",
  express.static(path.join(__dirname, "uploads/videos"))
);
app.use(
  "/uploads/notices",
  express.static(path.join(__dirname, "uploads/notices"))
); // Serve PDF files

// API Routes
app.use("/api/admin", adminRoutes);
app.use("/api/photos", photoRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/notices", noticeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
