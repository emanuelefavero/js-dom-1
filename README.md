# JS DOM 1

Esercizio introduttivo sulla manipolazione del DOM in JavaScript dal mio corso Web Dev.

## Come eseguire il progetto

Aprire `index.html` nel browser.

La logica dell'esercizio si trova in `assets/js/script.js`.

## Obiettivo

- Mostrare in pagina l'immagine di una lampadina spenta.
- Aggiungere un bottone con testo `Accendi`.
- Al click del bottone, sostituire l'immagine con la lampadina accesa.

### Bonus

- Al primo click la lampadina si accende e il bottone mostra `Spegni`.
- Al click successivo la lampadina si spegne e il bottone torna a mostrare `Accendi`.
- Il comportamento continua alternando i due stati.

## Decisioni tecniche

- Ho usato un elemento `img`, perche' la lampadina e' il contenuto principale della pagina e viene modificata direttamente via JavaScript.
- Ho selezionato gli elementi con `getElementById`, dato che nella pagina esistono una sola lampadina e un solo bottone.
- Ho gestito lo stato della lampadina con una variabile booleana `isOn`.
- Ho separato la logica in tre funzioni: `turnOn`, `turnOff` e `toggleLamp`, per mantenere il codice leggibile.
- Ho aggiornato anche l'attributo `alt` dell'immagine quando cambia lo stato della lampadina.
