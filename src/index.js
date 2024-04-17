import './styles.css';
// import './img/Microsoft-Fluentui-Emoji-Flat-Pile-Of-Poo-Flat.512.png';
// import './sounds/quick-fart-with-reverb.mp3';

// Different method of importing the single files above

// import Poop from './img/Microsoft-Fluentui-Emoji-Flat-Pile-Of-Poo-Flat.512.png';
import reverbFart from './sounds/quick-fart-with-reverb.mp3';

// Add logo to existing div. Not sure if this should go in the function below, it's own separate function or stay here by itself

// const poopEmoji = new Image();
// poopEmoji.src = Poop;

// poopLogo.appendChild(poopEmoji);

// Function for playing fart sound when user interacts with app logo. Click is enabled, but how can we also enable other interactions for accessibility like 'keydown' etc?
// TODO: Uncaught Runtime error of 'The element has no supported sources'. Check src link of audio element in HTML
// TODO: Need to find a Loader for audio sounds to add to the Webpack config with CSS and image files
function poopSound() {
  const poopLogo = document.querySelector(".app-logo"); // Does this need to be outside this function if we implement logo add above?

  poopLogo.addEventListener('click', function(e) {
    // Create the audio element via JS
    const audio = document.createElement("audio");
    audio.setAttribute("data-image", "logo-sound");

    // Wire the mp3 file up to the already existing img file
    const imageButton = document.querySelector(".image-button");
    audio.src = reverbFart;

    // Text to show if the users' browser doesn't support the mp3 file
    const audioError = document.createTextNode("Your browser does not support the HTML5 audio tag.");
    audio.appendChild(audioError);

    // Append the audio itself to the image file
    imageButton.appendChild(audio);

    if(!audio) return; // stops function from running altogether
    audio.currentTime = 0; // rewinds sound to the start. Can I make this a 1 or 2 to get it to start later?
    audio.play();
  });
};

poopSound();