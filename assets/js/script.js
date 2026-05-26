const button = document.getElementById('toggle-button');
const lamp = document.getElementById('lamp');
const body = document.body;

const ON_IMAGE = 'assets/img/yellow_lamp.png';
const OFF_IMAGE = 'assets/img/white_lamp.png';

let on = false;

const turnOn = () => {
  lamp.src = ON_IMAGE;
  lamp.alt = 'Lampadina accesa';
  button.textContent = 'Spegni';
  body.classList.add('light-on');
};

const turnOff = () => {
  lamp.src = OFF_IMAGE;
  lamp.alt = 'Lampadina spenta';
  button.textContent = 'Accendi';
  body.classList.remove('light-on');
};

const toggleLamp = () => {
  on = !on;
  if (on) turnOn();
  else turnOff();
};

button.addEventListener('click', toggleLamp);
