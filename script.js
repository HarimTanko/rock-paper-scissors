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

const choices = document.querySelectorAll('.choice');
const scores = document.getElementById('score');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const selectHeader = document.querySelector('.selection-header');
const modal = document.querySelector('.modal');

let options = ['rock', 'paper', 'scissors'];
let playerSelection = 0;
let computerSelection = 0;
let moves = 0;

const score = {
  player: 0,
  computer: 0,
};

function playSelect(e) {
  // console.log(e.target.id);
  playerSelection = e.target.id;

  // let playerInput = prompt('please select between rock, paper and scissors');
  // playerSelection = playerInput.toLowerCase();
  // while (options.indexOf(playerSelection) === -1 || playerSelection === null) {
  //   playerInput = prompt('Please input a valid slection');
  //   playerSelection = playerInput.toLowerCase();
  // }
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
  restart.style.display = 'inline-block';

  if (playerSelection === computerSelection) {
    // console.log(`Draw. ${playerSelection} equal to ${computerSelection}`);
    return 'draw';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection == 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    score.player++;
    console.log(score.player);
    playerScore.innerText = `Player: ${score.player}`;
    // console.log(
    //   `Player wins round  ${playerSelection} beats ${computerSelection} `
    // );
    return 'player';
  } else {
    score.computer++;
    console.log(score.computer);
    computerScore.innerText = `Computer: ${score.computer}`;
    // console.log(
    //   `Computer wins round ${computerSelection} beats ${playerSelection}`
    // );
    return 'computer';
  }
};

function playGame(e) {
  moves++;
  playerSelection = e.target.id;
  computerPlay();
  const winner = playRound(playerSelection, computerSelection);
  showWinner(winner, computerSelection);

  if (moves === 5) {
    gameOver(choices);
  }
}

function showWinner(winner, computerSelection) {
  if (winner === 'player') {
    //show modal result
    result.innerHTML = `
            <h1 class="text-win">You Win</h1>
            <i class="fas fa-hand-${playerSelection} fa-10x"></i>
            <p>Computer chose <strong>${computerSelection}</strong> </p>
        `;
  } else if (winner === 'computer') {
    //show modal result
    result.innerHTML = `
                <h1 class="text-lose">You Lose</h1>
                <i class="fas fa-hand-${computerSelection} fa-10x"></i>
                <p>Computer chose <strong>${computerSelection}</strong> </p>
            `;
  } else {
    //show modal result
    result.innerHTML = `
              <h1>Tie</h1>
              <i class="fas fa-hand-${computerSelection} fa-10x"></i>
              <p>Computer chose <strong>${computerSelection}</strong> </p>
          `;
  }

  //show score
  score.innerHTML = `
  <p>Player: ${score.player}</p>
  <p>Computer: ${score.computer}</p>
  `;

  modal.style.display = 'block';
}

function gameOver(choices) {
  choices.forEach((choice) => {
    choice.style.display = 'none';
  });

  if (score.player > score.computer) {
    selectHeader.innerHTML = `<h1 class="text-win">You win the game! ${score.player} to ${score.computer} </h1>`;
  } else if (score.computer > score.player) {
    selectHeader.innerHTML = `<h1 class="text-lose">You lose the game ${score.computer} to ${score.player}</h1> `;
  } else {
    selectHeader.innerHTML = `<h1>Draw!</h1>`;
  }
}

function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

function reset() {
  moves = 0;
  score.computer = 0;
  score.player = 0;
  playerScore.innerText = `Player: ${score.player}`;
  computerScore.innerText = `Computer: ${score.computer}`;
  selectHeader.innerText = `Make Your Selection `;
  choices.forEach((choice) => {
    choice.style.display = 'inline-block';
  });
}

choices.forEach((choice) => choice.addEventListener('click', playGame));
restart.addEventListener('click', reset);
window.addEventListener('click', clearModal);
