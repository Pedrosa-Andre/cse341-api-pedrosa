const router = require('express').Router();
const contacts = require('./contacts');
const swagger = require('./swagger');

// Instead of setting the function res.json here we move it to the Controller.
const myController = require('../controllers');

router.use('/contacts', contacts);
router.use('/', swagger);
router.use('/', myController.newMessage);
router.use('/another', myController.anotherMessage);

module.exports = router; // export to use in server.js
