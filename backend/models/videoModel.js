const db = require("../config/db"); // Ensure the correct path

// Insert video into the database
const insertVideo = (src, category, callback) => {
  const sql = "INSERT INTO videos (src, category) VALUES (?, ?)";
  db.query(sql, [src, category], callback);
};

// Get all videos from the database
const getAllVideos = (callback) => {
  const sql = "SELECT * FROM videos ORDER BY uploaded_at DESC";
  db.query(sql, callback);
};

// Get video by ID
const getVideoById = (id, callback) => {
  const sql = "SELECT * FROM videos WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err || results.length === 0) {
      return callback(err || "Video not found");
    }
    callback(null, results[0]);
  });
};

// Delete video by ID
const deleteVideoById = (id, callback) => {
  const sql = "DELETE FROM videos WHERE id = ?";
  db.query(sql, [id], callback);
};

module.exports = {
  insertVideo,
  getAllVideos,
  getVideoById,
  deleteVideoById,
};
