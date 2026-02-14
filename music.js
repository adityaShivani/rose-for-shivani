// Music Player for Valentine's Page
let audio = null;
let isPlaying = false;

// Initialize audio
function initAudio() {
  if (!audio) {
    audio = new Audio("music/song.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    
    // Handle when song ends (backup for loop)
    audio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    });
    
    // Handle errors
    audio.addEventListener('error', function(e) {
      console.error('Audio error:', e);
    });
  }
  return audio;
}

// Play music
function playMusic() {
  const audioElement = initAudio();
  audioElement.play()
    .then(() => {
      isPlaying = true;
      localStorage.setItem("musicAllowed", "yes");
      updateMusicButton();
    })
    .catch(err => {
      console.error('Playback failed:', err);
    });
}

// Pause music
function pauseMusic() {
  if (audio) {
    audio.pause();
    isPlaying = false;
    updateMusicButton();
  }
}

// Toggle music
function toggleMusic() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

// Update button state
function updateMusicButton() {
  const musicBtn = document.getElementById('musicToggleBtn');
  const musicIcon = document.getElementById('musicIcon');
  const musicText = document.getElementById('musicText');
  
  if (musicBtn) {
    if (isPlaying) {
      musicBtn.classList.add('playing');
      if (musicIcon) musicIcon.textContent = '🔊';
      if (musicText) musicText.textContent = 'Music Playing';
    } else {
      musicBtn.classList.remove('playing');
      if (musicIcon) musicIcon.textContent = '🔇';
      if (musicText) musicText.textContent = 'Tap to Play Music';
    }
  }
}

// Auto-play if previously allowed
window.addEventListener('load', () => {
  // Try to autoplay if user allowed it before
  if (localStorage.getItem("musicAllowed") === "yes") {
    // Small delay to ensure everything is loaded
    setTimeout(() => {
      playMusic();
    }, 500);
  }
  
  // Update button state
  updateMusicButton();
});

// First click anywhere starts music (if not already playing)
let firstInteraction = false;
document.addEventListener('click', () => {
  if (!firstInteraction && localStorage.getItem("musicAllowed") === "yes") {
    firstInteraction = true;
    playMusic();
  }
}, { once: true });