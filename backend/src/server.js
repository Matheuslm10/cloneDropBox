const express = require("express");

const app = express();

app.use(express.json()); //esse modulo, que tb eh um midleware, permite o servidor entender as requisicoes em formato json 
app.use(express.urlencoded({ extended: true })); //permite que seja enviado arquivos nas requisicoes

app.use(require('./routes'));

app.listen(3333);


