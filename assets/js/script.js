const button = document.getElementById('toggle-button');
const lamp = document.getElementById('lamp');
const body = document.body;

const ON_IMAGE = 'assets/img/yellow_lamp.png';
const OFF_IMAGE = 'assets/img/white_lamp.png';

let on = false;

const toggleLamp = () => {
  on = !on;

  if (on) {
    lamp.src = ON_IMAGE;
    lamp.alt = 'Lampadina accesa';
    button.textContent = 'Spegni';
    body.classList.add('light-on');
  } else {
    lamp.src = OFF_IMAGE;
    lamp.alt = 'Lampadina spenta';
    button.textContent = 'Accendi';
    body.classList.remove('light-on');
  }
};

button.addEventListener('click', toggleLamp);
