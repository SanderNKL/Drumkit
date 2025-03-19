// Sounds
const soundMap = {
    b: 'bongo',
    k: 'kick',
    s: 'snare',
}

// GET THE DRUM CONTAINER
const soundsContainer = document.querySelector('#drum-container');

// ADD SOUNDS TO THE WEBPAGE
for (const sound in soundMap) {
    const soundElement = document.createElement('div');
    soundElement.classList.add('drum');
    soundsContainer.appendChild(soundElement);

    // ADD DRUM IMAGE
    const img = document.createElement('img');
    img.src = `./images/${soundMap[sound]}.jpg`;
    img.width = 100;
    img.height = 100;
    soundElement.appendChild(img);
    
    // ADD DRUM NAME
    const text = document.createElement('p');
    text.textContent = `${sound}: ${soundMap[sound]}`;
    soundElement.appendChild(text);
}

// PLAY SOUND
function playSound(sound) {
    const audio = new Audio(`./sounds/${sound}.mp3`);
    audio.play();
}

// LISTEN TO KEY PRESSES
document.addEventListener('keydown', (e) => {
    const key = e.key;
    const sound = soundMap[key];
    if (sound) {
        playSound(sound);
    }
});