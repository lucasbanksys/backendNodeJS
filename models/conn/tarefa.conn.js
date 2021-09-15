const mongoose = require("mongoose");

const conect = (db_url, db_user, db_pass, db_data) => {
  db_url = process.env.DB_URL;
  db_user = process.env.DB_USER;
  db_pass = process.env.DB_PASS;
  db_data = process.env.DB_DATA;
};
const Conn = (url, user, pass, banco) => {
  mongoose
    .connect(`${url}/${banco}`, {
      user: user,
      pass: pass,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Conectado ao bd");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = Conn;
