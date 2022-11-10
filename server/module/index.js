const mongoose = require("mongoose");
// var encrypt = require("mongoose-encryption");

const SchameUser = new mongoose.Schema({
  name: {
    type: String,
    requeire: true,
  },
  email: {
    type: String,
    requeire: true,
  },
  password: {
    type: String,
    requeire: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

// const encKey = process.env.ENC_KEY;
// SchameUser.plugin(encrypt, {
//   secret: encKey,
//   encryptedFields: ["password"],
// });

const modul = mongoose.model("user", SchameUser);

module.exports = modul;
