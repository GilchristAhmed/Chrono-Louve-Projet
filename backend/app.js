// src/app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
//const eventRoutes = require('./routes/eventRoutes');
const figureRoutes = require('./routes/figureRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
dotenv.config();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
//app.use('/api/event', eventRoutes);
app.use('/api/figure', figureRoutes);
app.use('/auth', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
