const express = require("express");
const app = express();

const contatosRoutes = require("./routes/contatosRoutes");

app.use(express.json());
app.use("/contatos", contatosRoutes);

module.exports = app;
