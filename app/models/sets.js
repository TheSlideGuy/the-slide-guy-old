/**
 * Mongoose Schema for the sets collection
 *
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var setSchema = new Schema({
  title: {type: String},
  service_date: {type: Date, required: true},
  songs: [

  ]
});