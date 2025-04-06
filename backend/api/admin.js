const express = require("express");
const { adminLogin } = require("../controllers/adminController");

const app = express();
app.use(express.json());

app.post("/login", adminLogin); // Admin login

module.exports = app;
