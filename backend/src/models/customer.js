const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  status: { type: String, default: 'lead' },
});

module.exports = mongoose.model('Customer', customerSchema);
