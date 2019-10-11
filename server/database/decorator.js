//adds a db property to req objects that contains all of the models created;
const User = require("./models/User");

module.exports = function(req, res, next) {
  req.database = {
    User: User
  };

  next();
};
