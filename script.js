// const findDiagonal = (a) => {
//   return Math.sqrt(2) * a;
// };

// diag = findDiagonal(9);
// console.log(diag);

// const findArea = (a, b, c) => {
//   let p = (a + b + c) / 2;
//   let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//   return area;
// };

// console.log(findArea(5, 6, 7));

// const areaCirc = (r) => {
//   let area = Math.PI * (r * r);

//   let circ = 2 * Math.PI * r;

//   console.log(`the area is ${area} and the circumference is ${circ}`);
// };

// areaCirc(4);

// const largerNum = (a, b) => {
//   a > b ? console.log(a) : console.log(b);
// };

// largerNum(10, 60);

// const evenOdd = (n) => {
//   return n % 2 === 0 ? 'even' : 'odd';
// };

// console.log(evenOdd(19));

let options = ['rock', 'paper', 'scissors'];
let playerSelection = '';
let computerSelection = '';

const score = {
  player: 0,
  computer: 0,
};

function playSelect() {
  let playerInput = prompt('please select between rock, paper and scissors');
  playerSelection = playerInput.toLowerCase();

  while (options.indexOf(playerSelection) === -1 || playerSelection === null) {
    playerInput = prompt('Please input a valid slection');
    playerSelection = playerInput.toLowerCase();
  }
}

const computerPlay = () => {
  let rand = Math.floor(Math.random() * 3) + 1;
  switch (rand) {
    case 1:
      computerSelection = 'rock';
      break;
    case 2:
      computerSelection = 'paper';
      break;
    case 3:
      computerSelection = 'scissors';
      break;
    default:
      break;
  }
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    console.log(`Draw. ${playerSelection} equal to ${computerSelection}`);
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection == 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    score.player++;
    console.log(
      `Player wins round  ${playerSelection} beats ${computerSelection} `
    );
  } else {
    score.computer++;
    console.log(
      `Computer wins round ${computerSelection} beats ${playerSelection}`
    );
  }
};

for (let i = 0; i < 5; i++) {
  playSelect();
  computerPlay();

  playRound(playerSelection, computerSelection);
}
if (score.player > score.computer) {
  console.log(`Player wins ${score.player} to ${score.computer}`);
} else if (score.computer > score.player) {
  console.log(`Computer wins ${score.computer} to ${score.player}`);
} else {
  console.log(`Game ends in a draw  ${score.player} - ${score.computer}`);
}
