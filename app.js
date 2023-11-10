var express = require('express');
var cors = require('cors');

var indexRouter = require('./routes/index');

var app = express();

app.use(cors());

app.use('/', indexRouter);

app.get('/', (req, res) => {
  return res.send('API Credit Cards 1.0: Maristak Ikastetxea Durango');
});

module.exports = app;
