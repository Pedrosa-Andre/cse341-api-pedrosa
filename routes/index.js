const express = require('express');

const router = express.Router();

// Instead of setting the function res.json here we move it to the Controller.
const myController = require('../controllers');

// Execute the given function from the controller wen accessing the route "/".
router.get('/', myController.newMessage);
router.get('/another', myController.anotherMessage);

module.exports = router; // export to use in server.js
