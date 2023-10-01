const newMessage = (req, res) => {
  res.json('Mayara Pedrosa');
};

const anotherMessage = (req, res) => {
  res.json('Andre Pedrosa');
};

module.exports = {
  newMessage,
  anotherMessage,
};
