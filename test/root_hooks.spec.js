var mongoose = require('mongoose');
var mockgoose = require('mockgoose');

before(function rootBeforeHook(done) {
  mockgoose(mongoose);
  mongoose.connect('mongodb://localhost:27017/slide-guy');
  done();
});

after(function rootAfterHook() {
  mockgoose.reset();
  mongoose.connection.close();
});