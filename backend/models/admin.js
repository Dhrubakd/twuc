// backend/models/admin.js
const db = require('../config/db');

class Admin {
  static getByEmail(email, callback) {
    const sql = 'SELECT * FROM admin WHERE email = ?';
    db.query(sql, [email], callback);
  }
}

module.exports = Admin;
