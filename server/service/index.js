const lib = {};

lib.home = (req, res) => {
  res.send("Welcome to home page");
};
lib.login = (req, res) => {
  res.send("Login");
};
lib.register = (req, res) => {
  res.send("register");
};
module.exports = lib;
