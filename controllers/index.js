const newMessage = (req, res, next) => {
  res.json({message: "POST new message here"});
};

module.exports = {newMessage: newMessage};
