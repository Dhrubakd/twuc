// backend/controllers/adminController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

const SECRET_KEY = process.env.JWT_SECRET || 'supersecretkey';

const adminLogin = (req, res) => {
  const { email, password } = req.body;

  Admin.getByEmail(email, async (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Server error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    // Generate a JWT token for authentication
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });

    res.json({
      success: true,
      message: 'Login successful',
      token,
    });
  });
};

module.exports = { adminLogin };
