const txtNumEl = document.querySelector("#txtNum");
const guess = document.querySelector("#btnGuess");
const start = document.querySelector("#btnStart");
const textGame = document.querySelector(".textGame");
const textYeni = document.querySelector("#btnYeni");

let randomNumber = 0;
const minNumber = 0;
const maxNumber = 100;
let count = 5;
const startGame = () => {
  randomNumber = generateRandomNumber(minNumber, maxNumber);
  console.log(randomNumber);
};

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
};

/*  */
document.querySelector("#btnStart").addEventListener("click", () => {
  startGame();
  txtNumEl.innerHTML = "";
  txtNumEl.classList.remove("d-none");
  txtNumEl.classList.add("d-inline-block");

  guess.classList.remove("d-none");
  guess.classList.add("d-inline-block");

  start.classList.remove("d-block");
  start.classList.add("d-none");

  textGame.classList.remove("d-none");
  textGame.classList.add("d-inline-block");
});

const tahminEt = () => {
  let num = Number(txtNumEl.value);
  // num = !num || 0;

  console.log(num);
  if (num == randomNumber) {
    textGame.innerHTML = "Tebriks...";
  } else if (num > randomNumber) {
    count--;
    textGame.innerHTML = "Your number greater than the random number";
    getHeart(count);
  } else {
    count--;
    textGame.innerHTML = "Your number lesser than the random number";
    getHeart(count);
  }
  if (count == 0) {
    textGame.innerHTML = "hakkın bitti kardeşş";

    guess.classList.remove("d-inline-block");
    guess.classList.add("d-none");

    textYeni.classList.remove("d-none");
    textYeni.classList.add("d-inline-block");
  }
};

const getHeart = (num) => {
  switch (num) {
    case 5:
      document.querySelector("#heart").innerHTML = "🥰🥰🥰🥰🥰";
      break;
    case 4:
      document.querySelector("#heart").innerHTML = "🥰🥰🥰🥰";
      break;
    case 3:
      document.querySelector("#heart").innerHTML = "🥰🥰🥰";
      break;
    case 2:
      document.querySelector("#heart").innerHTML = "🥰🥰";
      break;
    case 1:
      document.querySelector("#heart").innerHTML = "🥰";
      break;
    default:
      document.querySelector("#heart").innerHTML = "";
      break;
  }
};

const yenidenBaşla = () => {
  startGame();
};

guess.addEventListener("click", () => {
  tahminEt();
});

textYeni.addEventListener("click", () => {
  textYeni.classList.remove("d-inline-block");
  textYeni.classList.add("d-none");

  guess.classList.remove("d-none");
  guess.classList.add("d-inline-block");

  startGame();
  tahminEt();
});

/* 
txtNumEl.onkeyup = function () {
  tahminEt();
};
txtNumEl.onclick = function () {
  tahminEt();
}; */
