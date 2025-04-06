const db = require("../config/db");

// Insert notice into the database
const insertNotice = (title, pdfPath, callback) => {
  const sql = "INSERT INTO notices (title, pdfPath) VALUES (?, ?)";
  db.query(sql, [title, pdfPath], callback);
};

// Get all notices from the database
const getAllNotices = (callback) => {
  const sql = "SELECT * FROM notices ORDER BY created_at DESC";
  db.query(sql, callback);
};

// Get notice by ID
const getNoticeById = (id, callback) => {
  const sql = "SELECT * FROM notices WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};

// Delete notice by ID
const deleteNoticeById = (id, callback) => {
  const sql = "DELETE FROM notices WHERE id = ?";
  db.query(sql, [id], callback);
};

module.exports = {
  insertNotice,
  getAllNotices,
  getNoticeById,
  deleteNoticeById,
};
