// Dark/light mode toggle
const modeToggle = document.getElementById('mode-toggle');
const iconMoon = document.getElementById('icon-moon');
const iconSun = document.getElementById('icon-sun');

function updateModeIcons(isDark) {
  if (isDark) {
    iconMoon.classList.add('active');
    iconSun.classList.remove('active');
  } else {
    iconMoon.classList.remove('active');
    iconSun.classList.add('active');
  }
}

function setMode(isDark) {
  if (isDark) {
    document.body.classList.remove('light-mode');
  } else {
    document.body.classList.add('light-mode');
  }
  updateModeIcons(isDark);
  localStorage.setItem('darkMode', isDark ? 'true' : 'false');
}

// Initialize mode from localStorage or default dark
const darkModeStored = localStorage.getItem('darkMode');
if (darkModeStored === null || darkModeStored === 'true') {
  setMode(true);
} else {
  setMode(false);
}

modeToggle.addEventListener('click', () => {
  const isCurrentlyDark = !document.body.classList.contains('light-mode');
  setMode(!isCurrentlyDark);
});

// Music toggle
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');

musicToggle.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play().catch(e => console.log('Autoplay prevented:', e));
    musicToggle.textContent = '🔈 Pause Music';
  } else {
    bgMusic.pause();
    musicToggle.textContent = '🔊 Play Music';
  }
});

// Autoplay permission tip:
// Browsers often block autoplay sound, so music might need a user interaction first.
// This button ensures user clicks to start music.
