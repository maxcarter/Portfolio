var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var winston = require('winston');

var config = require('./config');
var app = express();
var mode = 'dev';

var log = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'portfolio' },
  transports: [
    new winston.transports.File({ filename: config.log })
  ]
});

if (config.mode !== 'PROD') {
  log.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(morgan(mode));

require('./routes')(app);

app.use(express.static('app'));

var port = process.env.PORT || config.port;
app.listen(port, function() {
  log.info('Server listening on port: ' + port);
});
