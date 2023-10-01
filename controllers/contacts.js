const ObjectId = require('mongodb').ObjectId;
const mongodb = require('../db/connect');

const getAllContacts = async (req, res) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getContactById = async (req, res) => {
  const id = req.params.id;
  const query = {
    _id: new ObjectId(id),
  };
  const result = await mongodb.getDb().db().collection('contacts').find(query);
  result
    .toArray((err, response) => {
      if (err) throw err;
      console.log(response);
      db.close();
    })
    .then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
};

module.exports = {
  getAllContacts,
  getContactById,
};
