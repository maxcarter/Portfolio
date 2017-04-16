var log = require('winston');

module.exports = function(router) {
  router.use(function(err, req, res, next) {
    log.error(err);
    res.status(err.status);
    res.json({
      status_code: err.status,
      message: err.message,
      data: []
    });
    return;
  })
};
