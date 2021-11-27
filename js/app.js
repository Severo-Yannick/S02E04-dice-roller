// Fonction generaliste pour obtenir un nombre aléatoire
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// On ajoute une fonction pour tirer un nombre aléatoire entre 1 et 6
function getRandomNumber6() {
  return getRandomNumber(1, 6);
}

// Jouer un dé
// boardSelector contiendra le selecteur CSS du plateau dans lequel ajouter un dé
function rollDice(boardSelector) {
  // creation de la div
  var diceElement = document.createElement("div");
  // ajout de la classe dice à la div
  diceElement.classList.add("dice");
  // selection de l'id : #player ou #dealer
  document.querySelector(boardSelector).appendChild(diceElement);

  // On stocke le nombre aléatoire
  var randomNumber = getRandomNumber6();

  // On se sert du nombre obtenu pour modifier la position de l'arrière plan du dé
  var decalage = (randomNumber - 1) * -100;
  // On decale l'image aléatoirement
  diceElement.style.backgroundPositionX = decalage + "px";
}

// Fonction contenant les instructions à la création d'un dé
function askDiceCount() {
  do {
    // Demander à l'utilisateur combien de dés il veut lancer
    var diceCount = prompt("Combien de dés ?");
    diceCount = parseInt(diceCount, 10);
    console.log("Nombre entré par le user :" + diceCount);
  } while (isNaN(diceCount));

  return diceCount;
}

// Executer la fonction autant de fois que de dés demandés par l'utilisateur
function play() {
  var diceCount = askDiceCount();
  for (var i = 0; i < diceCount; i++) {
    rollDice('#player');
    rollDice('#dealer');
  }
}

// Nettoyer une partie
function reset(player,dealer){
  document.getElementById("player").innerHTML = "";
  document.getElementById("dealer").innerHTML = "";
}

// Lancer une nouvelle partie
function newGame(event) {
  reset("player","dealer");
  play();
  event.stopPropagation();
}

// Bouton rejouer une partie
var playButton = document.getElementById("play");
playButton.addEventListener("click", newGame);

play();