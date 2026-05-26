const button = document.getElementById('toggle-button');
const lamp = document.getElementById('lamp');
const body = document.body;

const turnOn = () => {
  lamp.src = 'assets/img/yellow_lamp.png';
  lamp.alt = 'Lampadina Accesa';
  button.textContent = 'Accesa';
  button.disabled = true;
  body.classList.add('light-on');
};

button.addEventListener('click', turnOn);
