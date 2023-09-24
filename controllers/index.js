const newMessage = (req, res, next) => {
  res.json('Mayara Pedrosa');
};

const anotherMessage = (req, res, next) => {
  res.json('Andre Pedrosa');
};

module.exports = {
  newMessage,
  anotherMessage
};