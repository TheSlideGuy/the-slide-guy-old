// Overwrite the properties on config as needed

var config = require('./config.defaults.js');

// Export the configuration settings
module.exports = config;
exports.env = 'dev';
exports.pco = {
  clientID: '8992ced19e553cd2e8c85e21f7f9890646aa4606a0fd6eaffcece4766346ce80',
  clientSecret: 'abe76c65a6bf02bd47ae736c4d8bc85b4c72cc57154792fda785b8d92b0dd1d4',
};
