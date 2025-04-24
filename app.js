const inputElement = document.createElement('input');
document.body.append(inputElement);
inputElement.addEventListener('input', (e) => {
    console.log(e.target.value);
});

const buttonElement = document.createElement('button');
buttonElement.textContent = 'Click Me';
buttonElement.addEventListener('click', (e) => {
    console.log(e);
})
document.body.append(buttonElement)

// Drumkit
const soundMap = {
    b: 'bongo',
    k: 'kick',
    s: 'snare',
}

const drumContainer = document.querySelector('#drum-container');
for (const key in soundMap) {
    const drumElement = document.createElement('div');
    drumElement.classList.add('drum');
    drumContainer.appendChild(drumElement);

    const imgElement = document.createElement('img');
    imgElement.src = `./images/${soundMap[key]}.jpg`;
    imgElement.width = 100;
    imgElement.height = 100;
    drumElement.appendChild(imgElement);
    
    const textElement = document.createElement('p');
    textElement.textContent = `${key}: ${soundMap[key]}`;
    drumElement.appendChild(textElement);

    drumElement.addEventListener('click', () => {
        playSound(soundMap[key]);
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