var Client = require('./quick_email_verification/client');

// Export module
var quickEmailVerification = module.exports;

/**
 * This file contains the global namespace for the module
 */
quickEmailVerification.client = function(auth, options) {
  return new Client(auth, options);
};
