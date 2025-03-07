const express = require("express");
const app = express();
const { connection } = require("./db");
const { todoRouter } = require("./routes/Todos.route");
const cors = require("cors");
require('dotenv').config();


app.use(cors());
app.use(express.json());

app.use("/", todoRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log("running at port no 8080");
});
