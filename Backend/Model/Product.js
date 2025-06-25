// models/Product.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  rating: Number,
  title: String,
  text: String,
  author: String,
  date: String,
  verified: Boolean
}, { _id: false });

const sizeOptionSchema = new mongoose.Schema({
  size: String,
  price: Number,
  originalPrice: Number
}, { _id: false });

const productSchema = new mongoose.Schema({
  title: String,
  image: String,
  button: String,
  productImages: [String],
  sizeOptions: [sizeOptionSchema],
  reviews: [reviewSchema]
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
