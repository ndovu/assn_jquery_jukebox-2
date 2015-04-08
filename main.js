var promptAndPlay = function() {
  console.log('You have entered the promptAndPlay function');
  var songString = prompt("Welcome to JukeBox!\nEnter a song to play:");
  var song = parseSong(songString);
  // added callback function enablePlayButton to renable the play button
  playSong(song, 500, enablePlayButton);
};

// change button text to say playing and disable
var playAndButtonPlaying = function() {
  $('button').html('Playing...');  
  $('button').attr('disabled', true);
  promptAndPlay();
}

// re-enable the play button
var enablePlayButton = function() {
  $('button').html('Play');
  $('button').attr('disabled', false);
}

// add on click behavior to button once the document is ready
$(document).ready(function() {$('button').on('click', playAndButtonPlaying)});