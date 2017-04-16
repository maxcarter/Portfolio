var log = require('winston');
var nodemailer = require('nodemailer');

var config = require('../config');

module.exports = {
  validate: function(req, res, next) {
    log.info('Validating request');
    if (!req.body.name) {
      var err = new Error('Name is a required field.');
      err.status = 400;
      next(err);
      return;
    }

    if (!req.body.email) {
      var err = new Error('Email is a required field.');
      err.status = 400;
      next(err);
      return;
    }

    if (!req.body.message) {
      var err = new Error('Message is a required field.');
      err.status = 400;
      next(err);
      return;
    }

    if (!/^[a-zA-Z0-9-_ ]*$/.test(req.body.name)) {
      var err = new Error('Please remove special characters from your name.');
      err.status = 400;
      next(err);
      return;
    }

    if (!/^[a-z][a-zA-Z0-9_.]*(\.[a-z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/.test(req.body.email)) {
      var err = new Error('Please enter a valid email.');
      err.status = 400;
      next(err);
      return;
    }

    log.info('Request validated');
    res.locals.email = {
      message: req.body.message,
      name: req.body.name,
      from: req.body.email
    };
    next();
  },
  create: function(req, res, next) {
    res.locals.email.subject = 'New Website Email From: ' + res.locals.email.from;
    res.locals.email.body = 'Hello,\n\n' +
                            res.locals.email.name + ' has reached out via your website: \n\n' +
                            res.locals.email.message + '\n\n' +
                            'From: \n' + res.locals.email.name + '\n' + res.locals.email.from;
    next();
  },
  send: function(req, res, next) {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: config.email.user,
        clientId: config.email.clientId,
        clientSecret: config.email.clientSecret,
        refreshToken: config.email.refreshToken
      }
    });

    var mailOptions = {
      from: config.email.user,
      to: config.email.user,
      subject: res.locals.email.subject,
      text: res.locals.email.body
    };

    log.info('Sending email to ' + config.email.user);
    transporter.sendMail(mailOptions, function(error, result) {
      if (error) {
        log.error(error);
        var err = new Error('Something went wrong while sending your email.');
        err.status = 500;
        next(err);
        return;
      }
      log.info('Email has been sent to ' + config.email.user);
      next();
    });
  },
  response: function(req, res, next) {
    res.json({
      status_code: 200,
      message: 'Thank You! Your message has been sent successfully',
      data: res.locals.email
    });
  }
};
