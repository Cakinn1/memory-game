const cardArray = [
  {
    name: "fries",
    img: "./public/fries.png",
  },
  {
    name: "cheeseburger",
    img: "./public/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "./public/hotdog.png",
  },
  {
    name: "icecream",
    img: "./public/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "./public/milkshake.png",
  },
  {
    name: "pizza",
    img: "./public/pizza.png",
  },
  {
    name: "fries",
    img: "./public/fries.png",
  },
  {
    name: "cheeseburger",
    img: "./public/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "./public/hotdog.png",
  },
  {
    name: "icecream",
    img: "./public/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "./public/milkshake.png",
  },
  {
    name: "pizza",
    img: "./public/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

const createBoard = () => {
  for (let i = 0; i < cardArray.length; ++i) {
    const card = document.createElement("img");
    card.setAttribute("src", "./public/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
};
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (optionOneId === optionTwoId) {
    cards[optionOneId].setAttribute("src", "./public/blank.png");
    cards[optionTwoId].setAttribute("src", "./public/blank.png");
    alert("you have clicked the same image!");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found a match!");
    cards[optionOneId].setAttribute("src", "./public/white.png");
    cards[optionTwoId].setAttribute("src", "./public/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "./public/blank.png");
    cards[optionTwoId].setAttribute("src", "./public/blank.png");
    alert("Sorry try again, noob");
  }
  cardsChosen = [];
  cardsChosenIds = [];
  resultDisplay.innerHTML = cardsWon.length

  if (cardsWon.length === (cardArray.length / 2)) {
    resultDisplay.innerHTML = 'Congratulations you found them all!'
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  const card = cardArray[cardId].name;
  cardsChosen.push(card);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(() => {
      checkMatch();
    }, 500);
  }
}
