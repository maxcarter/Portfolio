var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var log = require('winston');

var config = require('./config');
var app = express();
var mode = 'dev';

log.add(log.transports.File, {
  filename: config.log
});

if (config.mode === 'PROD') {
  log.remove(log.transports.Console);
  mode = 'tiny';
}

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(morgan(mode));

require('./routes')(app);

app.use(express.static('dist'));

var port = process.env.PORT || config.port;
app.listen(port, function() {
  log.info('Server listening on port: ' + port);
});
