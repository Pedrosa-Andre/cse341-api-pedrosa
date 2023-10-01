const router = require('express').Router();

const myController = require('../controllers/contacts');

router.get('/contacts', myController.getAllContacts);
router.get('/contacts/:id', myController.getContactById);

module.exports = router;
