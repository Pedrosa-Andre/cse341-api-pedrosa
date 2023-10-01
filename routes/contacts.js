const router = require('express').Router();
const bodyParser = require('body-parser');

const myController = require('../controllers/contacts');

router.get('/contacts', myController.getAllContacts);
router.get('/contacts/:id', myController.getContactById);
router.post('/contacts', bodyParser.json(), myController.addNewContact);
router.put('/contacts/:id', bodyParser.json(), myController.updateContact);
router.delete('/contacts/:id', myController.deleteContact);

module.exports = router;
