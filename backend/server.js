const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Route pour recevoir les données du formulaire
app.post('/submit-form', (req, res) => {
    console.log('Données reçues :', req.body);
    res.json({ message: 'Formulaire reçu !' });
});

// Lancer le serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});