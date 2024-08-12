const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

// Add a new customer
router.post('/add', async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).send(customer);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update customer status
router.patch('/update/:id', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send(customer);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
