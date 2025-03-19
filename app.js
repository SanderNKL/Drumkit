const soundMap = {
    b: 'bongo',
    k: 'kick',
    s: 'snare',
}

const drumContainer = document.querySelector('#drum-container');

for (const sound in soundMap) {
    const drumElement = document.createElement('div');
    drumElement.classList.add('drum');
    drumContainer.appendChild(drumElement);

    const imgElement = document.createElement('img');
    imgElement.src = `./images/${soundMap[sound]}.jpg`;
    imgElement.width = 100;
    imgElement.height = 100;
    drumElement.appendChild(imgElement);
    
    const textElement = document.createElement('p');
    textElement.textContent = `${sound}: ${soundMap[sound]}`;
    drumElement.appendChild(textElement);

    drumElement.addEventListener('click', () => {
        playSound(soundMap[sound]);
    });
}

const playSound = (sound) => {
    const audio = new Audio(`./sounds/${sound}.mp3`);
    audio.play();
}

document.addEventListener('keydown', (e) => {
    const key = e.key;
    const sound = soundMap[key];
    if (sound) {
        playSound(sound);
    }
});