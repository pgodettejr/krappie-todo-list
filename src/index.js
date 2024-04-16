import './styles.css';
import './img/Microsoft-Fluentui-Emoji-Flat-Pile-Of-Poo-Flat.512.png';
import './sounds/quick-fart-with-reverb.mp3';

// Different method of importing the single files above

// import Poop from './img/Microsoft-Fluentui-Emoji-Flat-Pile-Of-Poo-Flat.512.png';
// import reverbFart from './sounds/quick-fart-with-reverb.mp3';

// Function for playing fart sound when user interacts with app logo. Click is enabled, but how can we also enable other interactions for accessibility like 'keydown' etc?
// TODO: Uncaught Runtime error of 'The element has no supported sources'. Check src link of audio element in HTML
// TODO: Need to find a Loader for audio sounds to add to the Webpack config with CSS and image files
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