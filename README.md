# BasicAudioButton.js

A bare bones Javascript play button with no extra UI or complications

## Instructions
1. Prepare some play/pause/loading button images
2. Set up the image sources in this JS file. Lines 28 - 30
3. Customize the CSS, if desired. Line 45
4. Load the JS file in your HTML: `<script src='BasicAudioButton.js'></script>`
5. Initialize the library: `<body onload="initializeBasicAudioButtonJS();">`
6. Add your AudioButtons to your HTML as follows. (Use absolute filepaths or pausing won't work correctly.)

## HTML usage examples
`<img id='button1' class='audioButton' onclick='playAudio("http://www.cow.com/audio1.mp3", this.id);'>`

`<img id='button2' class='audioButton' onclick='playAudio("http://www.cow.com/audio2.mp3", this.id);'>`

`<img id='button3' class='audioButton' onclick='playAudio("http://www.cow.com/audio3.mp3", this.id);'>`

## Real world implementation
Subpages at www.taylorcalderone.com/music
