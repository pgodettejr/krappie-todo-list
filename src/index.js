import './styles.css';

// Function for playing fart sound when user interacts with app logo. Click is enabled, but how can we also enable other interactions for accessibility like 'keydown' etc?
function poopSound() {
  const poopLogo = document.querySelector("div[data-image=app-logo]");

  poopLogo.addEventListener('click', function(e) {
    const audio = document.querySelector("audio[data-image=app-logo]");
    if(!audio) return; // stops function from running altogether
    audio.currentTime = 0; // rewinds sound to the start
    audio.play();
  });
};

poopSound();