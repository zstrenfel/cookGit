'use strict';

require('babel-register')({presets: [ 'es2015', 'react' ]});

var app = require('./server/server');

const PORT = process.env.PORT || 8000;
app.default.listen(PORT, function () {
  console.log('Server listening on', PORT);
});