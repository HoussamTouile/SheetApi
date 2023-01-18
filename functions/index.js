const functions = require("firebase-functions");
var express = require('express');
var api = require('../api');
var bodyParser = require('body-parser');

var app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });


// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api', api);

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(400).send(err.message);
  });
  



exports.app = functions.https.onRequest(app);

// error handler

