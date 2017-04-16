var express = require('express');
var log = require('winston');

module.exports = function(app) {
  var router = express.Router();

  require('./email')(router);
  require('./error')(router);

  app.use('/api/v1', router);
};
