const express = require('express');
const mongoose = require('mongoose');
const searchRoutes = require('./routes/searchRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api', searchRoutes);

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Search service running on port ${port}`);
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});
