// src/models/HistoricalFigure.js
const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Event = require('./events');

const HistoricalFigure = sequelize.define('HistoricalFigure', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    firstName: {
        type: DataTypes.STRING(255),
        // allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    deathDate: {
        type: DataTypes.DATE,
        allowNull: true
    },

});


module.exports = HistoricalFigure;

  