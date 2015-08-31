/**
 * Mongoose Schema for the songs collection
 * 
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var songSchema = new Schema({
  title: String,
  artist: String,
  copyright_year: Number,
  publisher: String,
  ccli_id: Number,
  original_key: String,
  lyrics: [
    {
      song_part: String,
      body: String
    }
  ]
});