const ObjectId = require('mongodb').ObjectId;
const mongodb = require('../db/connect');

const getAllContacts = async (req, res) => {
  // Get all documents on the contacts collection.
  const result = await mongodb.getDb().db().collection('contacts').find();
  // Return the data to the requester.
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getContactById = async (req, res) => {
  // Get the ID parameter from the url.
  const id = req.params.id;
  // Create a query for the database with the id.
  const query = {
    _id: new ObjectId(id),
  };
  // Search on the 'contacts' collection using the given query.
  const result = await mongodb.getDb().db().collection('contacts').find(query);
  // Return the found contact to the requester.
  result
    .toArray((err, response) => {
      if (err) throw err;
      console.log(response);
    })
    .then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
};

// Function to check if a given user data has all the required fields.
function verifyUserData(userData) {
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'favoriteColor',
    'birthday',
  ];

  requiredFields.forEach((field) => {
    if (
      !Object.prototype.hasOwnProperty.call(userData, field) ||
      userData[field] === ''
    ) {
      throw new Error(`The '${field}' field is missing or empty`);
    }
  });

  return userData;
}

const addNewContact = async (req, res) => {
  const userData = req.body;

  try {
    // Check if the given data isn't missing any field.
    verifyUserData(userData);
  } catch (error) {
    return res.status(400).json({
      message: 'An error occurred while adding the new contact.',
      error: error.message,
    });
  }

  // Get the contacts collection.
  const contacts = await mongodb.getDb().db().collection('contacts');
  let successMessage;

  try {
    // Add new contact.
    const result = await contacts.insertOne(userData);
    successMessage = `A new user was created with the _id: ${result.insertedId}`;
  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred while adding the new contact.',
      error: error.message,
    });
  }

  return res.status(201).send(successMessage);
};

const updateContact = async (req, res) => {
  const userData = req.body;

  // Get the ID parameter from the url.
  const id = req.params.id;
  // Create a query for the database with the id.
  const query = {
    _id: new ObjectId(id),
  };

  // Get the contacts collection.
  const contacts = await mongodb.getDb().db().collection('contacts');

  try {
    await contacts.updateOne(query, { $set: userData });
  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred while updating the contact.',
      error: error.message,
    });
  }

  return res.status(204).send();
};

const deleteContact = async (req, res) => {
  // Get the ID parameter from the url.
  const id = req.params.id;
  // Create a query for the database with the id.
  const query = {
    _id: new ObjectId(id),
  };

  // Get the contacts collection.
  const contacts = await mongodb.getDb().db().collection('contacts');

  try {
    // Delete the contact that matches the given query.
    const result = await contacts.deleteOne(query);

    // If no contact matches the query return a 204 instead.
    if (result.deletedCount === 0) {
      return res.status(204).send();
    }
  } catch (error) {
    return res.status(500).json({
      message: 'An error occurred while deleting the contact.',
      error: error.message,
    });
  }

  return res.status(200).send();
};

module.exports = {
  getAllContacts,
  getContactById,
  addNewContact,
  updateContact,
  deleteContact,
};
