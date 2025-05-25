// src/app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const Routes = require('./routes');

const app = express();
dotenv.config();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.use('/api', Routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
