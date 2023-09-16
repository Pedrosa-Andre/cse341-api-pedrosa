const express = require('express'); //import express

const router  = express.Router(); 

const Controller = require('../controllers'); 

router.post('/', Controller.newMessage); 

router.get('/', (req, res) => {
  res.send('Mayara Pedrosa');
});

module.exports = router; // export to use in server.js
