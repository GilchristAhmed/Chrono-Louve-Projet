// src/models/Event.js
const Media = require('./media');
const HistoricalFigure = require('./HistoricalFigure');

class Event {
  constructor(id, description, startDate, endDate, medias, sources, historicalFigures) {
    this.id = id;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.medias = medias; // Array of Media objects
    this.sources = sources; // Array of strings or objects
    this.historicalFigures = historicalFigures; // Array of HistoricalFigure objects
  }
}

module.exports = Event;
