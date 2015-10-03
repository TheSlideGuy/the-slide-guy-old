// Overwrite the properties on config as needed

var config = require('./config.defaults.js');

// Export the configuration settings
module.exports = config;
exports.env = 'dev';