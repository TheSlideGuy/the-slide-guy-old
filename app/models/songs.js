/**
 * Mongoose Schema for the songs collection
 * 
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var songSchema = new Schema({
  title: {type: String, required: true},
  artist: {type: String, required: true},
  copyright_year: Number,
  publisher: String,
  ccli_id: {type: Number, unique: true},
  original_key: String,
  lyrics: [
    {
      song_part: String,
      body: String
    }
  ]
});

// Set unique index on artist and title
songSchema.index({artist: 1, title: 1}, {unique: true});

// Export the model
module.exports = mongoose.model('Song', songSchema);