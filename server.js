var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');


var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var app = express();

app.set('port', process.env.PORT || 8000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

