/**
 * Mongoose Schema for the sets collection
 *
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var setSchema = new Schema({
  title: String,
  songs: [

  ]
});