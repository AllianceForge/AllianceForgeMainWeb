require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const users = {}; // Simulated database (Replace with actual DB)

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Request Reset Link
app.post("/send-reset-link", (req, res) => {
  const { email } = req.body;
  if (!users[email]) return res.status(404).send("User not found");

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
  const resetLink = `http://allianceforge.online/reset-password.html?token=${token}`;

  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Reset Your Password",
    text: `Click the link to reset your password: ${resetLink}`,
  });

  res.send("Reset link sent!");
});

// Set New Password
app.post("/reset-password", (req, res) => {
  const { token, newPassword } = req.body;
  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET);
    users[email] = bcrypt.hashSync(newPassword, 10);
    res.send("Password updated!");
  } catch {
    res.status(400).send("Invalid or expired token");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
