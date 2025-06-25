const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRoutes = require('./Routes/Product');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Replace with your MongoDB URI
mongoose.connect('mongodb://127.0.0.1:27017/ecomDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Use routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
