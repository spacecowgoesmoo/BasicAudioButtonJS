# BasicAudioButton.js

© Taylor Calderone, 2017

## INSTRUCTIONS
1. Prepare some play/pause button images
2. Set up the image sources in this JS file. Lines 27, 28
3. Customize the CSS, if desired. Line 43
4. `<body onload="initializeBasicAudioButtonJS();">`
5. Add your AudioButtons to your HTML as follows. (Make sure to use absolute filepaths or pausing won't work correctly.)

## HTML USAGE EXAMPLES
`<img id='button1' class='audioButton' onclick='playAudio("http://www.cow.com/audio1.mp3", this.id);'>`

`<img id='button2' class='audioButton' onclick='playAudio("http://www.cow.com/audio2.mp3", this.id);'>`

`<img id='button3' class='audioButton' onclick='playAudio("http://www.cow.com/audio3.mp3", this.id);'>`

## REAL WORLD IMPLEMENTATION
www.taylorcalderone.com/music
