var config = {
  env: 'dev',
  hostname: 'localhost',
  port: '3000',
  mongo: {
    url: process.env.MONGO_URI || 'localhost',
    db: 'slide_guy'
  }
};

module.exports = config;