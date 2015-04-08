// promptAndPlay
//
// Prompts the user to enter a song.
// Plays the entered song.
// Repeats when the song is complete.
//


// Get things going.

var promptAndPlay = function() {
  console.log('You have entered the promptAndPlay function');
  var songString = prompt("Welcome to JukeBox!\nEnter a song to play:");
  var song = parseSong(songString);
  playSong(song, 500, changeButtonLabel);
};

var playAndButtonPlaying = function() {
  $('button').html('Playing...');  
  $('button').attr('disabled', true);
  promptAndPlay();
}

var changeButtonLabel = function() {
  $('button').html('Play');
  $('button').attr('disabled', false);
}

$(document).ready(function() {$('button').on('click', playAndButtonPlaying)});