const express = require('express');

const routes = express.Router();

//ao lado do '/teste' tem um midleware
routes.get('/teste', (req, res) => {
    return res.send('Hello World');
});

module.exports = routes;