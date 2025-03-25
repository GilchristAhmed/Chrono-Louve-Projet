// src/controllers/eventController.js
const Event = require('../models/event.js');

// Exemple de fonction pour obtenir un événement
function getEvent(req, res) {
  const eventId = req.params.id;
  // Logique pour récupérer l'événement par ID
  const event = findEventById(eventId);
  res.json(event);
}

// Exemple de fonction pour créer un événement
function createEvent(req, res) {
  const eventData = req.body;
  const newEvent = new Event(eventData.id, eventData.description, eventData.startDate, eventData.endDate, eventData.medias, eventData.sources, eventData.historicalFigures);
  // Logique pour sauvegarder l'événement
  saveEvent(newEvent);
  res.status(201).json(newEvent);
}

module.exports = {
  getEvent,
  createEvent,
};
