var audioElement = document.createElement('audio');
audioElement.setAttribute('src', '../assets/bg-music.mp3');
audioElement.load()
audioElement.addEventListener("canplay", function() { 
  audioElement.play(); 
}, true);