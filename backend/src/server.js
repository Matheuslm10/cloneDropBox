const express = require("express");
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://matheus:<omnistack>@cluster0-nx06r.mongodb.net/omnidatabase?retryWrites=true", 
    {
        useNewUrlParser: true
    }
);

app.use(express.json()); //esse modulo, que tb eh um midleware, permite o servidor entender as requisicoes em formato json 
app.use(express.urlencoded({ extended: true })); //permite que seja enviado arquivos nas requisicoes

app.use(require('./routes'));

app.listen(3332);


