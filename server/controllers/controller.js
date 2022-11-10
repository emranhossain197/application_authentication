const method = {};
const UserSchame = require("../module/index");
const md5 = require("md5");

method.register = async (req, res) => {
  //   const { name, email, password } = req.body;
  const name = req.body.name;
  const email = req.body.email;
  const password = md5(req.body.password);

  if (req.body) {
    const user = new UserSchame({
      name,
      email,
      password,
    });

    await user
      .save()
      .then((data) => {
        res.status(201).send({ masssege: "user Register Successfully" });
      })
      .catch((err) => {
        res.status(404).send({ error: "There are problem for create user!" });
      });
  }
};

method.login = async (req, res) => {
  const email = req.body.email;
  const password = md5(req.body.password);
  try {
    const user = await UserSchame.findOne({ email: email });

    if (user.password == password) {
      res.status(200).send({ masssege: "user valid" });
      console.log(user);
    } else {
      res.status(404).send({ error: "user not valid" });
    }
  } catch (err) {
    res.send("There are problem !");
  }
};

module.exports = method;
