const db = require("../config/db"); // Ensure the correct path

// Insert photo into the database
const insertPhoto = (src, category, callback) => {
  const sql = "INSERT INTO photos (src, category) VALUES (?, ?)";
  db.query(sql, [src, category], callback);
};

// Get all photos from the database
const getAllPhotos = (callback) => {
  const sql = "SELECT * FROM photos ORDER BY uploaded_at DESC";
  db.query(sql, callback);
};

// Get photo by ID
const getPhotoById = (id, callback) => {
  const sql = "SELECT * FROM photos WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err || results.length === 0) {
      return callback(err || "Photo not found");
    }
    callback(null, results[0]);
  });
};

// Delete photo by ID
const deletePhotoById = (id, callback) => {
  const sql = "DELETE FROM photos WHERE id = ?";
  db.query(sql, [id], callback);
};

module.exports = {
  insertPhoto,
  getAllPhotos,
  getPhotoById,
  deletePhotoById,
};
