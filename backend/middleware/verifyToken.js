// src/middleware/verifyToken.js
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Récupérer le token depuis l'en-tête Authorization
    const token = req.headers['authorization'];

    // Vérifier si le token est présent
    if (!token) {
        return res.status(403).json({ error: 'Token manquant' });
    }

    // Vérifier le token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token invalide' });
        }

        // Si le token est valide, ajouter l'ID de l'utilisateur à la requête
        req.userId = decoded.userId;
        next(); // Passer au middleware suivant ou à la route
    });
};

module.exports = verifyToken;