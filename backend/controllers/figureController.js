// src/controllers/figureController.js
const HistoricalFigure = require('../models/HistoricalFigure');

// Exemple de fonction pour obtenir une figure historique
function getFigure(req, res) {
  const figureId = req.params.id;
  // Logique pour récupérer la figure par ID
  const figure = findFigureById(figureId);
  res.json(figure);
}

// Exemple de fonction pour créer une figure historique
function createFigure(req, res) {
  const figureData = req.body;
  const newFigure = new HistoricalFigure(figureData.id, figureData.firstName, figureData.lastName, figureData.bio, figureData.birthDate, figureData.deathDate);
  // Logique pour sauvegarder la figure
  saveFigure(newFigure);
  res.status(201).json(newFigure);
}

module.exports = {
  getFigure,
  createFigure,
};
