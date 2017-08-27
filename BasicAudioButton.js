// BasicAudioButton.js
// © Taylor Calderone, 2017

// INSTRUCTIONS
// 1. Prepare some play/pause button images
// 2. Set up the image sources in this JS file. Lines 27, 28
// 3. Customize the CSS, if desired. Line 43
// 4. <body onload="initializeBasicAudioButtonJS();">
// 5. Add your AudioButtons to your HTML as follows. (Make sure to use absolute filepaths or pausing won't work correctly.)

// HTML USAGE EXAMPLES
// <img id='button1' class='audioButton' onclick='playAudio("http://www.YourSite.com/yourAudioFile1.mp3", this.id);'>
// <img id='button2' class='audioButton' onclick='playAudio("http://www.YourSite.com/yourAudioFile2.mp3", this.id);'>
// <img id='button3' class='audioButton' onclick='playAudio("http://www.YourSite.com/yourAudioFile3.mp3", this.id);'>

// REAL WORLD IMPLEMENTATION
// www.taylorcalderone.com/music








// Set up button source images
var playButtonIMG = 'Images/play.png';
var pauseButtonIMG = 'Images/pause.png';

// Sets all audioButton images on the page to 'play'
function resetAllSongButtons() {
	var elements = document.getElementsByClassName('audioButton');
	for (var i = 0; i < elements.length; i++) {
	    elements[i].src = playButtonIMG;
	}
}

function initializeBasicAudioButtonJS() {	
	resetAllSongButtons();
	
	// Set up the CSS (so that we don't need a separate CSS file)
	var extraCSS = document.createElement('style');
	extraCSS.innerHTML = ".audioButton { height:35px; position:relative; top:12px; margin:0 10px 0 0; } .audioButton:hover { cursor:pointer; }";
	document.body.appendChild(extraCSS);
	
	// Create the invisible audioPlayer
	var extraAudioTag = document.createElement('audio');
	extraAudioTag.id = 'audioPlayer';
	document.body.appendChild(extraAudioTag);
}








function playAudio(file, buttonID) {
	// Play
	if (audioPlayer.paused) {
		// Don't reload the mp3 if the user restarts playback. This turns pause into 'restart from beginning'
		if (audioPlayer.currentTime == 0) { audioPlayer.src = file; }
		audioPlayer.play();
		document.getElementById(buttonID).src = pauseButtonIMG;
		// Add listener to revert the text once the track finishes
		setTimeout(checkforSongEnd, 1000);
	}


	// Pause
	// IMPORTANT - Only works with absolute filepaths
	else {
		audioPlayer.pause();
		document.getElementById(buttonID).src = playButtonIMG;
	}


	// Forces Play if you switch between tracks
	if (audioPlayer.src !== file) {
		// Manually change all button texts to 'play'
		resetAllSongButtons();

		// ..and play
		audioPlayer.src = file;
		audioPlayer.play();
		document.getElementById(buttonID).src = pauseButtonIMG;
		setTimeout(checkforSongEnd, 1000);
	}


	// Event listener to revert the button when a song ends.
	// The AUDIO element autopauses when this happens
	function checkforSongEnd() {
		if (audioPlayer.paused == true) {
			document.getElementById(buttonID).src = playButtonIMG;
		} else { setTimeout(checkforSongEnd, 1000); }
	}
}