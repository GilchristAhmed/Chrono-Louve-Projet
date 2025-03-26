//src/models/userRoutes.js
const db = require('../utils/database');


const User = {
    create: (userData, callback) => {
        const query = 'INSERT INTO users (userId, email, password, fname, lname, roleUser) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(query, [userData.userId,userData.email, userData.password, userData.fname, userData.lname, userData.roleUser], (err, results) => {
            if (err) return callback(err);
            callback(null, results.insertId);

        });

    },

    findByEmail: (email, callback) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    },
    findByFirstName: (firstname, callback) => {
        const query = 'SELECT * FROM users WHERE firstname = ?';
        db.query(query, [firstname], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }
};

module.exports = User;