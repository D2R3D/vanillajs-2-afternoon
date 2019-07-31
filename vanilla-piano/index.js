console.log('connected')

window.addEventListener('keypress', function(keyPressEvent) {

const tone = document.querySelector(`audio[data-key ="${keyPressEvent.keyCode}"]`)
 if (!tone) return;
 const pianoKey = document.querySelector(`.pianoKey[data-key ="${keyPressEvent.keyCode}"]`)
tone.currentTime = 0;
tone.play()
})