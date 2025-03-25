// src/utils/database.js
// Exemple de configuration pour une base de données SQLite
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE events (id INTEGER PRIMARY KEY, description TEXT, startDate TEXT, endDate TEXT)");
  db.run("CREATE TABLE figures (id INTEGER PRIMARY KEY, firstName TEXT, lastName TEXT, bio TEXT, birthDate TEXT, deathDate TEXT)");
  db.run("CREATE TABLE medias (id INTEGER PRIMARY KEY, url TEXT, type TEXT)");
});

module.exports = db;
