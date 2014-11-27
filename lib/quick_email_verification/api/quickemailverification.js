/**
 * QuickEmailVerification Class for email verification
 */
var Quickemailverification = function(client) {
  this.client = client;

  return this;
};

/**
 * Verify email address and get detailed response
 *
 * '/verify?email=:email' GET
 *
 * @param "email" send email address in query parameter
 */
Quickemailverification.prototype.verify = function (email, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  email = encodeURIComponent(email);
  var body = (options['query'] ? options['query'] : {});

  this.client.get('/verify?email=' + email + '', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

// Export module
module.exports = Quickemailverification
