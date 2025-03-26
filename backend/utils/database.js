// src/utils/database.js
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

// Créez une connexion à la base de données MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST, // Par exemple, 'localhost'
  user: process.env.DB_USER, // Votre nom d'utilisateur MySQL
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD, // Votre mot de passe MySQL
  database: process.env.DB_NAME // Le nom de votre base de données
});

// Connectez-vous à la base de données
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données: ' + err.stack);
    return;
  }
  console.log('Connecté à la base de données MySQL en tant que ' + db.threadId);
});

// Créez les tables si elles n'existent pas déjà
const createTables = () => {
  const createEventsTable = `
    CREATE TABLE IF NOT EXISTS events (
      id INT AUTO_INCREMENT PRIMARY KEY,
      description TEXT,
      startDate DATETIME,
      endDate DATETIME
    )
  `;

  const createFiguresTable = `
    CREATE TABLE IF NOT EXISTS figures (
      id INT AUTO_INCREMENT PRIMARY KEY,
      firstName VARCHAR(255),
      lastName VARCHAR(255),
      bio TEXT,
      birthDate DATE,
      deathDate DATE
    )
  `;

  const createMediasTable = `
    CREATE TABLE IF NOT EXISTS medias (
      id INT AUTO_INCREMENT PRIMARY KEY,
      url TEXT,
      type VARCHAR(50)
    )
  `;

  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
      userId VARCHAR(255) PRIMARY KEY,
      email VARCHAR(255),
      password  VARCHAR(255),
      fName VARCHAR(255),
      lName VARCHAR(255),
      roleUser VARCHAR(50)
    )
  `;

  db.query(createEventsTable, (err) => {
    if (err) throw err;
    console.log('Table events créée ou déjà existante.');
  });

  db.query(createFiguresTable, (err) => {
    if (err) throw err;
    console.log('Table figures créée ou déjà existante.');
  });

  db.query(createMediasTable, (err) => {
    if (err) throw err;
    console.log('Table medias créée ou déjà existante.');
  });

  db.query(createUsersTable, (err) => {
    if (err) throw err;
    console.log('Table medias créée ou déjà existante.');
  });
};

// Appel de la fonction pour créer les tables
createTables();

module.exports = db;