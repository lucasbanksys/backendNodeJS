if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const cors = require("cors");
const express = require("express");
const Conn = require("./models/conn/tarefa.conn");

const app = express();

app.use(express.json());
app.use(cors());

const corsOptions = {
  origin: "https://banksys-frontend.herokuapp.com/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;
Conn(db_url, db_user, db_pass, db_data);

const porta = 3001;

const tarefa = require("./routers/tarefa.routes");
app.use("/tarefa", tarefa);

app.listen(process.env.PORT || porta, () => {
  console.info(`O app está rodando em : http://localhost:${porta}/`);
});
