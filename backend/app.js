// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/eventRoutes');
const figureRoutes = require('./routes/figureRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', eventRoutes);
app.use('/api', figureRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
