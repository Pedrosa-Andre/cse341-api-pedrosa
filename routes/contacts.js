const router = require('express').Router();
const bodyParser = require('body-parser');

const myController = require('../controllers/contacts');

router.get('/', myController.getAllContacts);
router.get('/:id', myController.getContactById);
router.post('/', bodyParser.json(), myController.addNewContact);
router.put('/:id', bodyParser.json(), myController.updateContact);
router.delete('/:id', myController.deleteContact);

module.exports = router;
