var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
var expect = require('chai').expect;

var Song = require('../../app/models/songs');

describe('The Song model', function() {
  describe('Given a valid song model', function() {
    var song;
    before(function() {
      song = new Song({
        title: 'From the Inside Out',
        artist: 'Hillsong United',
        copyright_year: 2005,
        publisher: 'Hillsong Music Publishing',
        ccli_id: 4705176,
        original_key: 'C',
        lyrics: [
          {
            song_part: 'Verse',
            parts: [
                'A thousand times I\'ve failed\n'
                + 'Still your mercy remains\n'
                + 'Should I stumble again\n'
                + 'Still I\'m caught in your grace\n'
                + 'Everlasting, your light will shine when all else fades\n'
                + 'Never ending, your glory goes beyond all fame\n'
            ]
          },
          {
            song_part: 'Chorus',
            parts: [
              'Everlasting, your light will shine when all else fades\n'
              + 'Never ending, your glory goes beyond all fame\n'
              + 'And the cry of my heart is to bring you praise\n'
              + 'From the inside out\n'
              + 'Lord my soul cries out\n'
            ]
          }
        ]
      });
    });

    it('should have a connection', function(done) {
      var connection = mongoose.connect('mongodb://localhost:27017/slide-guy').connection;
      connection.on('connected', function() {
        expect(connection._mockReadyState).to.equal(1);
        done();
      })
    });

    it('should create the song', function(done) {
      song.save(function(err, savedSong) {
        expect(err).to.be.a('null');
        expect(savedSong.title).to.equal('From the Inside Out');
        expect(savedSong.lyrics[0].parts).to.have.length.greaterThan(0);
        done();
      });
    });

    after(function(done) {
      song = null;
      done();
    });
  });
  
  describe('Given an invalid song model', function() {
    it('should be invalidated when there are no song parts added', function(done) {
      var song = new Song({
        title: 'From the Inside Out',
        artist: 'Hillsong United',
        copyright_year: 2005,
        publisher: 'Hillsong Music Publishing',
        ccli_id: 4705176,
        original_key: 'C',
        lyrics: [
          {
            song_part: 'Verse',
            parts: []
          }
        ]
      });

      song.save(function(err) {
        expect(err.errors.lyrics.type).to.equal('Lyrics must be added to the song before it can be saved.');
        done();
      });
    });
  });
});
