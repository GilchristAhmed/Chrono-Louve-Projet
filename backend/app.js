// src/app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
dotenv.config();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
//app.use('/api/event', eventRoutes);
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
