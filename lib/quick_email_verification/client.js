/**
 * Main client for the module
 */
var Client = function(auth, options) {
  this.httpClient = new (require('./http_client').HttpClient)(auth, options);

  return this;
};

/**
 * QuickEmailVerification Class for email verification
 */
Client.prototype.quickemailverification = function () {
    return new (require('./api/quickemailverification'))(this.httpClient);
};

// Export module
module.exports = Client;
