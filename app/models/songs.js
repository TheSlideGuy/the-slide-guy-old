/**
 * Mongoose Schema for the songs collection
 *
 */

var indexBy = require('lodash.indexBy');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Import the song parts schema
//var songPartSchema = require('./schema_only/song_parts.js');

var validPartsEnum = {
  values: 'Verse Pre-Chorus Chorus Bridge'.split(" "),
  message: '`{VALUE}` is not a valid song part.'
};

// Schema definition of song parts
var songPartSchema = new Schema({
  song_part: { type: String, required: true, unique: true, enum: validPartsEnum },
  parts: [{
    type: String, required: true
  }]
});

var songSchema = new Schema({
  title: {type: String, required: true},
  artist: {type: String, required: true},
  copyright_year: Number,
  publisher: String,
  ccli_id: {type: Number, unique: true},
  original_key: String,
  lyrics: [songPartSchema]
});

// Set unique index on artist and title
songSchema.index({artist: 1, title: 1}, {unique: true});

// Function to ensure that the lyrics array is not empty
var lyricsValidator = function(lyrArr) {
  // The lyrics array must be defined and non-empty
  var songPartsDefined = lyrArr && lyrArr.length > 0;
  if (!songPartsDefined) {
    return false;
  }

  // Make sure that song parts are not empty
  for (var i = 0; i < lyrArr.length; i++) {
    if (lyrArr[i].parts && lyrArr[i].parts.length > 0) {
      return true;
    }
  }

  return false;
};

// This song must have lyrics or it is invalid
songSchema.path('lyrics').validate(lyricsValidator, 'Lyrics must be added to the song before it can be saved.');

// Turn the regular lyrics array into a dictionary with song parts as keys
songSchema.methods.lyricsToDict = function() {
  return indexBy(this.lyrics, 'song_part');
};

// Export the model
module.exports = mongoose.model('Song', songSchema);
