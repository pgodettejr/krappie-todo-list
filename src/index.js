import './styles.css';
import reverbFart from './sounds/quick-fart-with-reverb.mp3';
import Gear from './img/settings.png';
import Plus from './img/plus.png';

// Icons for Add Task and Settings buttons in the header
const headerTask = document.getElementById("add-task");
const headerSettings = document.getElementById("settings");

const settingsIcon = new Image();
settingsIcon.src = Gear;

const taskIcon = new Image();
taskIcon.src = Plus;

headerSettings.appendChild(settingsIcon);
headerTask.appendChild(taskIcon);

// Function for playing fart sound when user interacts with app logo. Click is enabled, but how can we also enable other interactions for accessibility like 'keydown' etc?
function poopSound() {
  const poopLogo = document.querySelector(".app-logo");

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
    audio.currentTime = 1; // rewinds file to just before the sound clip starts (1 second mark)
    audio.play();
  });
};

poopSound();