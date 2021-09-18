// creation de la div
var diceElement = document.createElement('div');
// ajout de la classe dice à la div
diceElement.classList.add('dice');
// selection de l'id player et ajout de l'enfant diceElement
var playerElement = document.getElementById('player').appendChild(diceElement);

// Fonction generaliste pour obtenir un nombre aléatoire
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// On ajoute une fonction pour tirer un nombre aléatoire entre 1 et 6
function getRandomNumber6() {
  return getRandomNumber(1,6);
}

// On stocke le nombre aléatoire
var randomNumber = getRandomNumber6();

// On se sert du nombre obtenu pour modifier la position de l'arrière plan du dé
var decalage = (randomNumber - 1) * -100;
// On decale l'image aléatoirement
diceElement.style.backgroundPositionX = decalage + "px";