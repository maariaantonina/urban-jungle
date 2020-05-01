const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
  name: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number },
  isDiscount: { type: Boolean },
  discount: { type: Number },
  photos: { type: Array },
  description: { type: String },
  height: { type: Number },
});

module.exports = mongoose.model('Product', productSchema);
