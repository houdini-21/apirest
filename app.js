const express = require("express");
const bodyParser = require("body-parser");
const api = require("./routes");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);

app.get('/', (req, res) => res.send('Hello World!'))

module.exports = app;
