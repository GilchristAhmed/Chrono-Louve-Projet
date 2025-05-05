
// src/controllers/authController.js
const User = require('../models/userModel');
const pool = require('../utils/database');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');


const signup = async (req, res) => {
 const { email, password, fName, lName, roleUser } = req.body;
 const hashedPassword = await bcrypt.hash(password, 10);

 const userData = {
  userId: uuidv4(),
  email,
  password: hashedPassword,
  fName,
  lName,
  roleUser
 };

 User.create(userData, (err) => {
  if (err) {
   console.error("Erreur lors de la création de l'utilisateur:", err);
   return res.status(500).json({ error: err.message });
  }
  console.log(userData);
  res.status(201).json({ message: 'Utilisateur créé avec succès' });


 });

};

const login = async (req, res) => {
 const { email, password } = req.body;

 User.findByEmail(email, async (err, user) => {
  if (err || !user) return res.status(401).json({ error: 'Identifiants invalides' });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(401).json({ error: 'Identifiants invalides' });

  const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.status(200).json({ token });
 });
};

module.exports = { signup, login };