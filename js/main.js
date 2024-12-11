var audioElement = document.createElement('audio');
audioElement.setAttribute('src', '../assets/bg-music.mp3');
audioElement.load()
audioElement.addEventListener("canplay", function() { 
  audioElement.play(); 
}, true);

document.querySelectorAll('.navbar-nav .nav-link').forEach(function(anchor) {
  anchor.addEventListener('click', function () {
      var navbarCollapse = document.getElementById('navbarNav');
      var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
      });
      bsCollapse.hide();  // Manually close the navbar after clicking a link
  });
});