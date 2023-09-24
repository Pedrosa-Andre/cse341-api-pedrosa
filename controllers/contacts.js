const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getContactById = async (req, res, next) => {
  let id = req.query.id;
  var query = {
    "_id": new ObjectId(id)
  };
  const result = await mongodb.getDb().db().collection('contacts').find(query);
  result.toArray(
    function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    }
  ).then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

module.exports = {
  getAllContacts,
  getContactById
};