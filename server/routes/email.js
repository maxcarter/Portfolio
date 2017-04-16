var log = require('winston');
var ctrls = require('../controllers');

module.exports = function(router) {
  log.info('Initializing route POST /email');
  router.post('/email',
    ctrls.email.validate,
    ctrls.email.create,
    ctrls.email.send,
    ctrls.email.response
  );
};
